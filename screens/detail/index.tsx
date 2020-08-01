import React, { FC } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../../components';
import { COLORS } from '../../constant';

const DISH_QUERY = gql`
  query dish($id: String!) {
    dish(id: $id) {
      id
      recipeImage
      title
      description
      ingredients
      steps {
        imgs
        text
      }
    }
  }
`;

const DetailsScreen: FC = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();

  navigation.setOptions({ title: route.params.title });

  const { data, loading } = useQuery(DISH_QUERY, {
    variables: { id: route.params.id },
  });

  if (loading) {
    return <Text>Loading</Text>;
  }
  if (!data) return <Text>No dish</Text>;

  const { dish } = data;

  return (
    <ScrollView>
      <Image
        style={styles.img}
        source={{
          uri: dish.recipeImage,
        }}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.top} />
        <View style={[styles.section, styles.border]}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 15,
              lineHeight: 25,
              color: COLORS.blue,
            }}
            type="bold"
          >
            {dish.title}
          </Text>
          {dish.description.length > 0 && <Text>{dish.description}</Text>}
        </View>

        <View style={[styles.section, styles.border]}>
          <Text type="bold" style={{ marginBottom: 10 }}>
            Nguyên liệu:
          </Text>
          {dish.ingredients.map((i: string) => (
            <View style={{ marginBottom: 7, flexDirection: 'row' }}>
              <View style={[styles.dot]} />
              <View style={{ flex: 1 }}>
                <Text key={i}>{i}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.section]}>
          <Text type="bold" style={{ marginBottom: 10 }}>
            Cách làm:
          </Text>
          {dish.steps.map((step: any, index: number) => (
            <View
              key={step.text}
              style={{ marginBottom: 10, flexDirection: 'row' }}
            >
              <View style={[styles.dot]} />
              <View style={{ flex: 1 }}>
                <Text style={{ marginBottom: 7 }}>{step.text}</Text>

                <FlatList
                  data={step.imgs}
                  horizontal
                  renderItem={({ item }: { item: string }) => {
                    return (
                      <Image
                        key={item}
                        style={{
                          height: 120,
                          width: 120,
                          borderRadius: 10,
                          marginRight: 10,
                        }}
                        source={{
                          uri: item,
                        }}
                        resizeMode="cover"
                      />
                    );
                  }}
                  keyExtractor={(item) => item}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const size_dot = 8;

const styles = StyleSheet.create({
  img: {
    height: 300,
  },
  content: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  top: {
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: 30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

  section: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  section_title: {
    marginBottom: 5,
  },

  border: {
    borderBottomColor: COLORS.light,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },

  dot: {
    height: size_dot,
    width: size_dot,
    borderRadius: size_dot,
    backgroundColor: COLORS.yellow,
    marginRight: 10,
    marginTop: 7,
  },
});

export default DetailsScreen;

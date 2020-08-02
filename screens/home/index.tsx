import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Title from './title';
import Suggestions from './suggestions';
import Search from './search';
import NewFoods from './new-foods';
import { Categories, More } from '../../components';

function HomeScreen({ navigation }: any) {
  const moveToCategories = () => {
    navigation.navigate('Categories');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: '#fff', flex: 1 }}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <View style={[styles.section, styles.wrap_section, { paddingTop: 15 }]}>
          <Search />
        </View>

        <View style={styles.wrap_section}>
          <View style={[styles.section, styles.center, { paddingBottom: 5 }]}>
            <Title>Danh mục</Title>
            <More onPress={moveToCategories} />
          </View>
          <Categories />
        </View>

        {/* <View style={styles.wrap_section}>
          <View style={styles.section}>
            <Title>Gợi ý</Title>
          </View>

          <Suggestions />
        </View>

        <View style={styles.wrap_section}>
          <View style={[styles.section, styles.center, { paddingBottom: 5 }]}>
            <Title>Yêu thích</Title>
            <More onPress={moveToCategories} />
          </View>

          <Suggestions />
        </View> */}

        <View style={styles.wrap_section}>
          <View style={[styles.section, styles.center, { paddingBottom: 5 }]}>
            <Title>Món mới</Title>
            <More onPress={moveToCategories} />
          </View>

          <NewFoods />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap_section: {
    paddingBottom: 20,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  section: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;

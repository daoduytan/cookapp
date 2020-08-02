import React, { FC } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { Button, CardFood, Text } from '..';
import { SIZES, COLORS } from '../../constant';

interface Props {
  loading: boolean;
  dishs: any[];
  page?: number;
  pages?: number;
  loadMore: (page: number) => void;
  total?: number;
}

const ListFoods: FC<Props> = ({
  dishs,
  loading,
  page = 1,
  pages = 1,
  loadMore,
  total = 0,
}) => {
  const handleLoadMore = () => {
    loadMore(page);
  };

  const renderAction = () => {
    if (loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    if (dishs.length === 0 || pages === page) return <View />;

    return (
      <View style={styles.button}>
        <Button title="Xem thêm" onPress={handleLoadMore} />
      </View>
    );
  };

  return (
    <View>
      {total > 0 && (
        <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
          <Text
            style={{ color: COLORS.blue }}
            type="bold"
          >{`${total} món ăn được tìm thấy`}</Text>
        </View>
      )}

      <FlatList
        contentContainerStyle={styles.wrap}
        data={dishs || []}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <CardFood food={item} style={{ flex: 1 }} />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
      />
      {renderAction()}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 5,
  },
  card: {
    width: (SIZES.WIDTH_SCREEN - 10) / 2,
    padding: 10,
  },
  button: {
    padding: 15,
  },
});

export default ListFoods;

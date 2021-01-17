import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../redux/reducers/newsReducer';

export const NewsList = () => {
  const news = useSelector((state) => state.newsAPI.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <View
      style={styles.container}>
      <SafeAreaView>
        <FlatList
          keyExtractor={(item, index) =>
            item.id.toString() + '_' + index.toString()
          }
          data={news}
          contentContainerStyle={{paddingHorizontal: 12}}
          renderItem={({item}) => {
            return (
              <View style={styles.cardContainer}>
                <Text style={{fontSize: 16}}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
  },
  cardContainer: {
    marginVertical: 8,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flex: 1,
  },
});

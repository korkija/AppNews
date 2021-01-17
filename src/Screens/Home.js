import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {homeText} from '../constatns/texts';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingVertical: 20}}>
        <Text>{homeText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
});

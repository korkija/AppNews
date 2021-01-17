import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAuth} from '../redux/reducers/authReducer';
import {profileText} from '../constatns/texts';

export const Profile = () => {
  const isAuth = useSelector((state) => state.authAPI.isAuth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('Login');
    }
  }, [isAuth]);

  const onPressLogin = () => {
    dispatch(setIsAuth(false));
    AsyncStorage.removeItem('@saveProfile');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingVertical: 20}}>
        <Text>{profileText}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onPressLogin()}
        style={styles.buttonLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonLogout: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#d1f9fa',
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 20,
    borderColor: 'grey',
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
});

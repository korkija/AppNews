import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {InputText} from '../Components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {clearError, login} from '../redux/reducers/authReducer';

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authAPI.isAuth);
  const navigation = useNavigation();
  const errorMessage = useSelector((state) => state.authAPI.errorMessage);
  useEffect(() => {
    if (isAuth) {
      navigation.goBack();
    }
  }, [isAuth]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    dispatch(login({name, password}));
  };

  const setClearMessage = () => {
    setTimeout(() => dispatch(clearError()), 5000);
  };

  useEffect(() => {
    if (errorMessage) {
      setClearMessage();
    }
  }, [errorMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewLoginPass}>
        <InputText value={name} changeValue={setName} label="Name" />
        <InputText
          value={password}
          changeValue={setPassword}
          label="password"
        />
        <TouchableOpacity
          onPress={() => onPressLogin({name, password})}
          disabled={!name || !password}
          style={{
            ...styles.buttonLogin,
            backgroundColor: !!name && !!password ? '#02f3f6' : 'grey',
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      {!!errorMessage && (
        <View style={styles.errorModal}>
          <Text style={styles.errorModalText}>{errorMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  errorModal: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#000',
    width: Dimensions.get('window').width - 50,
    borderRadius: 20,
    padding: 20,
  },
  errorModalText: {color: '#fff', fontSize: 16},
  buttonLogin: {
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    padding: 5,
  },
  viewLoginPass: {
    flex: 1,
    maxHeight: 200,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    padding: 10,
  },
});

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
// import * as loginActions from 'app/actions/loginActions';
import styles from './styles';

export default function Login() {
  const id = useSelector(state => state.loginReducer.id);
  // const dispatch = useDispatch();
  // const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <Text>Login Status : {id}</Text>
      <TouchableOpacity>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

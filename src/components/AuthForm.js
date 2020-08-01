import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <>
    <Spacer>
  <Text h3 >{headerText}</Text>
  </Spacer>
  <Input
    label='Your Email Address'
    value={email}
    onChangeText={setEmail}
    autoCapitalize="none"
    autoCorrect={false}

    // onChangeText={(value) => setEmail(value)}  
    leftIcon={{ type: 'MaterialIcons', name: 'email' }}
  />
  <Spacer />
  <Input
    label='Password'
    value={password}
    secureTextEntry={true}
    onChangeText={value => setPassword(value)}
    autoCapitalize="none"
    autoCorrect={false}
    leftIcon={{ type: 'MaterialIcons', name: 'lock' }}
  />
  {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
  <Spacer>
    <Button
      title={submitButtonText}
      type='outline'
      onPress={() => onSubmit({ email, password })}
    />
  </Spacer>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginTop: -10,
    marginLeft: 15
  },
  link: {
    color: 'blue',
    fontSize: 20,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center'
  }
});


export default AuthForm;
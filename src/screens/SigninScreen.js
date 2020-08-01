import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';


const SigninScreen = ({navigation}) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <NavigationEvents 
      //onWillFocus={clearErrorMessage}
     // onDidFocus={}
      onWillBlur={clearErrorMessage}
     // onDidBlur={}
        
      />
    <AuthForm
      headerText="Sign In to Your Account"
      errorMessage={state.errorMessage}
      submitButtonText="Sign In"
      onSubmit={signin}
      // onSubmit={({email, password}) => signin({email, password})}  SEE SIMPLIFIED SYNTAX ABOVE
    />
    <NavLink 
      label="Don't have an account? Sign up here!"
      routeName="Signup"
    />
  </View>
  )
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginTop: -10
  },
});

export default SigninScreen; 
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


//<NavigationEvents onWillFocus={clearErrorMessage} make sure to add onWillFocus 

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  let globalStyles = require('../styles/globalStyles');
  // return react fragment with multiple parts, like an array

  console.log(state);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        // onDidFocus={}
        onWillBlur={clearErrorMessage}
      // onDidBlur={}
      />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      // onSubmit={({email, password}) => signup({email, password})}  SEE SIMPLIFIED SYNTAX ABOVE
      />
      <NavLink
        label="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SignupScreen; 
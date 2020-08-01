import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, label, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>      
      <Spacer>     
        <Text style={styles.link}>{label}</Text>  
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    color: 'dodgerblue',
    fontSize: 15,
    width: '70%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',


  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
});

export default withNavigation(NavLink);
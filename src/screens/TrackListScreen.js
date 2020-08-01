import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => fetchTracks()} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() =>
            navigation.navigate('TrackDetail', { _id: item._id })
          }>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return { title: 'Tracks' }
};

const styles = StyleSheet.create({});

export default TrackListScreen; 
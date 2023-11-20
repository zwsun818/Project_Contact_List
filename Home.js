import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from './Footer';


const Home = ({ contacts, navigation, onDelete }) => {

  useEffect(() => {
    // This function will be called whenever contacts are updated in EditContact
    console.log('Contacts updated in Home:', contacts);
  }, [contacts]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => navigation.navigate('ContactDetails', { contact: item })}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add styles for the main container
    backgroundColor:'grey',
    flex:1,
    margin:10,
  },
  title: {
    // Add styles for the title
    fontSize:30,
    padding:5,
  },
  contactContainer: {
    // Add styles for the contact container
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5,
    height:40,
  },
  contactItem: {
    // Add styles for the contact item
   height: 50,
    width: 100,
    marginRight: '10%',
    margin: '3%',
  },
  deleteButton: {
    // Add styles for the delete button
    height: 50,
    width: 50,
    marginRight: '10%',
    margin: '3%',
    opacity: 0.6,
  },
});

export default Home;


// ContactDetailsScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Footer from './Footer'

const ContactDetails =({ route, navigation,updateContacts}) => {
  const { contact } = route.params;

   useEffect(() => {
    // This function will be called whenever contacts are updated in EditContact
    console.log('Contacts updated in ContactDetails:', contact);
  }, [contact]);

  return (
    <View style = {style.contactsContainer}>
        <Text style = {style.contactsDetailsContainer}>Name: {contact.name}</Text>
        <Text style = {style.contactsDetailsContainer}>Position: {contact.position || 'N/A'}</Text>
        <Text style = {style.contactsDetailsContainer}>Phone: {contact.phone || 'N/A'}</Text>
        <Text style = {style.contactsDetailsContainer}>Email: {contact.email || 'N/A'}</Text>
        <Text style = {style.contactsDetailsContainer}>Address: {contact.address || 'N/A'}</Text>
      

      <TouchableOpacity style = {style.editContainer}
         onPress={() => navigation.navigate('EditContact', { contact })}>
        <Text>Edit</Text>
      </TouchableOpacity>

      <Footer navigation={navigation} />
    </View>
  );
};

const style = StyleSheet.create({
  contactsContainer:{
     backgroundColor:"grey",
     height:400,
     margin:5,
  },
  contactsDetailsContainer:{
      margin:5,
      padding:5,
      height:50,
      backgroundColor:'white',
      broder: '1 solid #333',
  },
  editContainer:{
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  }
})

export default ContactDetails;


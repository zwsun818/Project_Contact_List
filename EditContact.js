import React, { useState,useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Footer from './Footer';

const EditContact = ({ route, navigation, setContacts }) => {
  const { contact } = route.params;

  const [id, setId] = useState(contact.id);
  const [name, setName] = useState(contact.name);
  const [position, setPosition] = useState(contact.position || '');
  const [phone, setPhone] = useState(contact.phone || '');
  const [email, setEmail] = useState(contact.email || '');
  const [address, setAddress] = useState(contact.address || '');

  const updateContact = () => {
    // Update the contacts array in the parent component (Home or ContactDetails)
    setContacts((prevContacts) => {
      return prevContacts.map((c) =>
        c.id === contact.id
          ? {
              id,
              name,
              position,
              phone,
              email,
              address,
            }
          : c
      );
    });

    // Navigate back to the home page.
     navigation.navigate('Home');
  };

  return (
    <View style={styles.detailsContainer}>
      <TextInput style={styles.inputContainer} placeholder="EmployeeId" value={id} onChangeText={setId} />
      <TextInput style={styles.inputContainer} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        style={styles.inputContainer}
        placeholder="Position"
        value={position}
        onChangeText={setPosition}
      />
      <TextInput style={styles.inputContainer} placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.inputContainer} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.inputContainer}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.touchableOpacityContainer} onPress={updateContact}>
        <Text>Update</Text>
      </TouchableOpacity>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: 'grey',
    height: 400, // You may adjust this based on your design
    margin: 5,
  },
  inputContainer: {
    margin: 5,
    padding: 5,
    height: 50,
    backgroundColor: 'white',
    border: '1 solid #333', // Fix the typo here
  },
  touchableOpacityContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
});

export default EditContact;

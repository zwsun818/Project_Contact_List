import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import Footer from "./Footer"

const AddContact = ({ onAdd, navigation }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    const newContact = {id, name, position, email, phone, address };
    onAdd(newContact);
    // Clear input fields after saving
    setId('');
    setName('');
    setPosition('');
    setEmail('');
    setPhone('');
    setAddress('');
    // Navigate back to Home after saving
    navigation.navigate('Home');
  };
 
  return (
    <View style={style.addContactContainer}>
      
      <TextInput style={style.addInputContainer} 
                 placeholder="Employee Id" value={id} onChangeText={setId} />
      <TextInput style={style.addInputContainer} 
                 placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={style.addInputContainer} 
                 placeholder="Position" value={position} onChangeText={setPosition} />
      <TextInput style={style.addInputContainer} 
                 placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={style.addInputContainer}  
                 placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput style={style.addInputContainer} 
              placeholder="Address" value={address} onChangeText={setAddress} />
              
      <TouchableOpacity style={style.saveContainer}  onPress={handleSave}>
        <Text>Save</Text>
      </TouchableOpacity>
      
      <Footer navigation={navigation} />
    </View>
  );
};

const style = StyleSheet.create({
  addContactContainer:{
    backgroundColor:"grey",
    height:400,
    margin:5,
  },
  addInputContainer:{
    margin:5,
    padding:5,
    height:50,
    backgroundColor:'white',
    broder: '1 solid #333',
  },
  saveContainer:{
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10, 
  }
})

export default AddContact;

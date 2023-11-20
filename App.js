 //App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';
import Home from './Home';
import ContactDetails from './ContactDetails';
import AddContact from './AddContact';
import EditContact from './EditContact';

const Stack = createStackNavigator();

const App = () => {
  const [contacts, setContacts] = useState([
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Cityville',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'UX Designer',
    email: 'jane@example.com',
    phone: '987-654-3210',
    address: '456 Elm St, Townsville',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    position: 'Product Manager',
    email: 'bob@example.com',
    phone: '555-123-4567',
    address: '789 Oak St, Villageland',
  },
]);

 const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const MyTitle = () => (
   <Image
    source={require('./assets/logo.png')} 
    style={{ width: 100, height: 70 }}
    resizeMode="contain"
  />
);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          options={{ title:<MyTitle/>}}
        >
          {(props) => <Home {...props} contacts={contacts} onDelete={handleDeleteContact} setContacts={setContacts} />}
        </Stack.Screen>

        <Stack.Screen name="ContactDetails">
          {(props) => <ContactDetails {...props} updateContacts={setContacts} />}
        </Stack.Screen>

        <Stack.Screen name="AddContact" options={{ title: 'Add Contact' }}>
          {(props) => <AddContact {...props} onAdd={handleAddContact} />}
        </Stack.Screen>

        <Stack.Screen name="EditContact" options={{ title: 'Edit Contact' }}>
         {(props) => <EditContact {...props} setContacts={setContacts} />}
        </Stack.Screen >

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


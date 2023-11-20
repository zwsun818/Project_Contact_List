import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
            style={{ width: 50, height: 50, margin: 10, }}
            source={require('./assets/home_icon.png')}
          />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('AddContact')}>
        <Image
            style={{ width: 50, height: 50, margin: 10 }}
            source={require('./assets/plus_icon.png')}
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'center',
    margin:5,
  }
})

export default Footer;

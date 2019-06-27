
import * as React from 'react';
import { BottomNavigation, Appbar,Portal,Modal, Provider } from 'react-native-paper';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import {peliculasDB} from '../Datos/peliculas'
import Barra from './barra';


class Favoritos extends React.Component {

  render(){
  return (
  <View style={styles.body}>
     <Barra titulo="Mis favoritos" subtitulo="" />
      <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.bodyTab}>
      </View>
      </ScrollView>
      </View>
  );
  }

};

export default Favoritos;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    flexWrap: 'wrap',
  },
   contentContainer: {
    paddingVertical: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    flexWrap: 'wrap',
  },
  barra:{
    backgroundColor: "#272727"
  },
  bodyTab: {
    flex: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    flexWrap: 'wrap',
  },
});
import * as React from 'react';
import { BottomNavigation, Appbar,Portal,Modal, Provider } from 'react-native-paper';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Tarjeta from './components/card';
import Buscador from './components/buscador'
import Barra from './components/barra';
import Peliculas from './components/tabPeliculas';
import BuscarPelicula from './components/tabBuscarPelicula';
import Favoritos from './components/tabFavoritos';
import {peliculasDB} from './Datos/peliculas';
const APIKEY="c4d6352e9bf08cd4945872a0b1a8af7d";



export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Musica', icon: 'home' },
      { key: 'search', title: 'Buscar', icon: 'search' },
      { key: 'lib', title: 'Favoritos', icon: 'favorite' },
    ],
   
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: Peliculas ,
    search: BuscarPelicula,
    lib: Favoritos,
  });

  render() {
    return (
      <BottomNavigation
      style={styles.barra}
      barStyle={styles.barra}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({


  barra:{
    backgroundColor: "#272727"
  },

});

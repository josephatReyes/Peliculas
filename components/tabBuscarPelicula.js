
import * as React from 'react';
import { BottomNavigation, Appbar,Portal,Modal, Provider } from 'react-native-paper';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Tarjeta from './card';
import Barra from './barra';
import Buscador from './buscador';
import {peliculasDB} from '../Datos/peliculas'


class BuscarPelicula extends React.Component {

  constructor(props){
    super(props);
    this.state={
      texto:"",
      pelis:[]
    }
    this.buscarPeli= this.buscarPeli.bind(this);
  }
buscarPeli(texto){

  let pelis= peliculasDB.filter((peli)=>{
    return(peli.title.startsWith(texto))
  })
this.setState({pelis: pelis});

}

render(){
  return (
    <View style={styles.body}>
     <Barra titulo="Buscar pelicula" subtitulo="" />
       <Buscador doSearch={this.buscarPeli}/>
      <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.bodyTab}>
    
      {this.state.pelis.map((peli,index)=>{

       return(
<Tarjeta key={index} peli={peli} >
</Tarjeta>
       );
     })}
      </View>
      </ScrollView>
      </View>
   
  );}
}

export default BuscarPelicula;

const styles = StyleSheet.create({
   contentContainer: {
    paddingVertical: 20
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    flexWrap: 'wrap',
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

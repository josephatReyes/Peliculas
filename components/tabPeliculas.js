
import * as React from 'react';
import { BottomNavigation, Appbar,Portal,Modal, Provider } from 'react-native-paper';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Tarjeta from './card';
import Barra from './barra';
import {peliculasDB} from '../Datos/peliculas'


class Peliculas extends React.Component {
state={
  pelis: [],
  visible:true
}

componentDidMount(){
 this.setState({pelis: peliculasDB})
  //console.log("TIPO",( peliculasDB));
}

  render(){
      const { visible } = this.state;
   // console.log("TIPO",typeof( peliculasDB));
  return (

         
    <View style={styles.body}>
     <Barra titulo="Populares" subtitulo="" />
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
    
  )
  }
};
export default Peliculas;

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

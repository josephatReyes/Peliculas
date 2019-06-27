import * as React from 'react';
import { BottomNavigation, Appbar, Card, Avatar, Paragraph, Button,Title } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';

class Tarjeta extends React.Component  {
   constructor(props) {
    super(props);
    this.state = {
      inReview: false,
    };
    this.toggleR= this.toggleR.bind(this);
  }
  toggleR(){
    this.setState({inReview: !this.state.inReview})
  }
  render(){
  return (
<Card style={styles.container}>
    <Card.Title titleStyle={styles.title}  subtitleStyle={styles.title} 
    title={this.props.peli.title} subtitle={"Ranking: "+this.props.peli.vote_average}  />
    <Card.Content>
     <Title>Card title</Title>
    </Card.Content>
    <Card.Cover source={{ uri:'http://image.tmdb.org/t/p/w500/'+this.props.peli.poster_path }} />
    <Card.Actions>{
     this.state.inReview ?
       <Button type="contained" icon="close" color="#e63e32" onPress={this.toggleR} >Cerrar</Button>
    
      :
        <Button type="contained" icon="info" color="#e63e32" onPress={this.toggleR} >Saber más</Button>
    
    }
    
 
    </Card.Actions>

    {
      this.state.inReview?
    <Card style={styles.container}>

    <Card.Content>
    <Text style={styles.title}>
   {this.props.peli.overview}
     </Text>
    </Card.Content>

       </Card>   
    :null}
       
  </Card>
  );}
}

export default Tarjeta


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 2,
    color:"white",
  },
  textButton:{
    color:"#6fd862"
  },
  title:{
    color:"white",
  }
});

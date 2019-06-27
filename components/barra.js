import * as React from 'react';
import { BottomNavigation, Appbar, Card, Avatar, Paragraph, Button,Title } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';

const Barra = (props) => {
  return (
    <Appbar.Header style={styles.barra}>
      <Appbar.Content title={props.titulo} subtitle={props.subtitulo} />
    </Appbar.Header>
  );
};
export default Barra;
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

  barra:{
    backgroundColor: "#272727"
  },

});
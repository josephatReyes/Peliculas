import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export default class Buscador extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    firstQuery: '',
  };
this.query= this.query.bind(this);
  }
query(query){
this.setState({ firstQuery: query }, this.props.doSearch(this.state.firstQuery));
}
  render() {
    const { firstQuery } = this.state;
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={this.query}
        value={firstQuery}
      />
    );
  }
}
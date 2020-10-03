import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import List from 'semantic-ui-react/dist/commonjs/elements/List/List';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/values')
      .then(response => {
        this.setState({ values: response.data })
      });
  }

  render() {
    return (
      <div className="App">
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

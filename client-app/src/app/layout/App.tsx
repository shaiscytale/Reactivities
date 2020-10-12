import React, { Component } from 'react';
import Axios from 'axios';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import List from 'semantic-ui-react/dist/commonjs/elements/List/List';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: []
  }

  componentDidMount() {
    Axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => {
        this.setState({ activities: response.data })
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
          {this.state.activities.map((activity: IActivity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

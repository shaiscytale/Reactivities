import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import List from 'semantic-ui-react/dist/commonjs/elements/List/List';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      });
  }, [])


  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
}

export default App;

import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container'
import ActivityStore from '../../app/stores/activityStore'

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities"></Menu.Item>
        <Menu.Item>
          <Button onClick={activityStore.openCreateForm} positive content="Create activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);

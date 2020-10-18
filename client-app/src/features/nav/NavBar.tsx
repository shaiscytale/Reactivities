import { observer } from 'mobx-react-lite'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container'

const NavBar: React.FC = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header exact as={NavLink} to={'/'}>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" exact as={NavLink} to={'/activities'} />
        <Menu.Item>
          <Button exact as={NavLink} to={'/createActivity'} positive content="Create activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);

import React from 'react'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container'

export const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities"></Menu.Item>
        <Menu.Item>
          <Button positive content="Create activity" />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Navbar, Button } from 'react-bulma-components'

const Menu = () => {

  return (
    <Box>
      <Navbar role="navigation" className="is-mobile" >
        <Link className="navbar-item" to="/">
          <Button>About</Button>
        </Link>
        <Link className="navbar-item" to="/skills">
          <Button>Skills</Button>
        </Link>
        <Link className="navbar-item" to="/files">
          <Button>Files</Button>
        </Link>
      </Navbar>
    </Box>
  )

}

export default Menu
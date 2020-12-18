import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bulma-components'
import BulmaHeading from './components/BulmaHeading'
import Menu from './components/Menu'
import BulmaFooter from './components/BulmaFooter'
import About from './components/About'
import Files from './components/Files'
import Skills from './components/Skills'

const App = () => {
  return (
    <Container className="has-background-white">
      <BulmaHeading />
      <Menu />
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/files">
          <Files />
        </Route>
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
      <BulmaFooter />
    </Container>
  )
}

export default App

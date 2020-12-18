import React from 'react'
import { Link } from 'react-router-dom'

import { Heading, Box, Section, Content, Button } from 'react-bulma-components'

const Files = () => {

  return (
    <Box>
      <Section>
        <Heading>Resume</Heading>
        <Content>
          <Link to="/cv_villemanninen.pdf" target="_blank" download><Button className="is-primary">cv_villemanninen.pdf</Button></Link>
        </Content>
      </Section>
    </Box>
  )

}

export default Files
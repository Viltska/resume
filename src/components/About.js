import React from 'react'
import Helmet from 'react-helmet'
import { Heading, Content, Box, Section } from 'react-bulma-components'
import { about } from '../db'

const About = () => {

  const sections = about

  return (
    <Box>
      <Helmet>
        <title>Ville Manninen - About</title>
      </Helmet>
      <Section>
        <Heading>
          About me
      </Heading>
        {sections.map((section, i) =>
          <Content key={i}>
            {section}
          </Content>)}
      </Section>
    </Box>
  )
}

export default About
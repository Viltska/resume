import React from 'react'
import { Heading, Content, Box, Section } from 'react-bulma-components'
import { about } from '../db'

const About = () => {

  const sections = about

  return (
    <Box>
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
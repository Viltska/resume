import React from 'react'
import Skill from './Skill'
import data from '../db'

import { Heading, Content, Box, Columns, Section } from 'react-bulma-components'

const Skills = () => {

  const skills = data
  
  const oddList = () => skills.map((skill, i) => {
    if (i % 2 === 0) {
      return (< Skill key={skill.id} skill={skill} />)
    }
    return null
  })

  const evenList = () => skills.map((skill, i) => {
    if (i % 2 !== 0) {
      return (<Skill key={skill.id} skill={skill} />)
    }
    return null
  })


  console.log(skills)


  return (
    <Box>
      <Section>
        <Heading>
          Skills
        </Heading>
        <Content>
          <Columns>
            <Columns.Column>
              {oddList()}
            </Columns.Column>
            <Columns.Column>
              {evenList()}
            </Columns.Column>
          </Columns>
        </Content>
      </Section>
    </Box >
  )
}

export default Skills
import React from 'react'
import Skill from './Skill'
import { skills } from '../db'

import { Heading, Content, Box, Columns, Section } from 'react-bulma-components'

const Skills = () => {

  const sortedSkills = skills.sort((a, b) => {
    return b.level - a.level
  })

  const oddList = () => sortedSkills.map((skill, i) => {
    if (i % 2 === 0) {
      return (< Skill key={skill.id} skill={skill} />)
    }
    return null
  })

  const evenList = () => sortedSkills.map((skill, i) => {
    if (i % 2 !== 0) {
      return (<Skill key={skill.id} skill={skill} />)
    }
    return null
  })


  console.log('Skills list', sortedSkills)


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
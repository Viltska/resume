import React from 'react'

import { Box, Heading, Progress } from 'react-bulma-components'

const Skill = ({ skill }) => {
  const level = skill.level

  const getValue = () => {
    if (level === 1) {
      return 'Some knowlege'
    }
    if (level === 2) {
      return 'Basic'
    }
    if (level === 3) {
      return 'Good'
    }
    return null
  }

  return (
    <Box>
      <Heading className="level-left" size={4}>{skill.title}</Heading>
      <p>{skill.about}
        {skill.link &&
          <>
            {' '}<a href={skill.link}>Example</a>
          </>
        }
      </p>
      <Progress className="progress is-primary" value={skill.level} max={3} /><p>{getValue()}</p>
    </Box>
  )

}

export default Skill
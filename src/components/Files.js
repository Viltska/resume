import React from 'react'
import Helmet from 'react-helmet'

import { Heading, Box, Section, Content, Button } from 'react-bulma-components'

const Files = () => {

  return (
    <Box>
      <Helmet>
        <title>Ville Manninen - Files</title>
      </Helmet>
      <Section>
        <Heading>Resume</Heading>
        <Content>
          <Button ><a href={process.env.PUBLIC_URL + '/files/resume-ville-manninen.pdf'} download="resume-ville-manninen.pdf">Download</a></Button>
        </Content>
      </Section>
    </Box>
  )

}

export default Files
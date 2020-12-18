import React from 'react'
import { Hero, Heading, Columns } from 'react-bulma-components'
import SocialBar from './SocialBar'

const BulmaHeading = () => {

  const imageStyle = {
    borderRadius: 240 / 2,
  }

  return (
    <Hero color="primary" className="is-bold">
      <Hero.Body>
        <Columns className="columns is-mobile">
          <Columns.Column>
            <Heading size={2}>Ville Manninen</Heading>
            <Heading size={3}>
              Software Develeoper, Computer Science Student @<a href="https://www.helsinki.fi/en/computer-science">University of Helsinki</a>
            </Heading>
            <SocialBar />
          </Columns.Column>
          <Columns.Column className="is-half">
            <Columns className="columns is-mobile">
              <Columns.Column className="is-one-third"></Columns.Column>
              <Columns.Column>
                <img style={imageStyle} width="240" className="is-rounded" src={process.env.PUBLIC_URL + '/self.jpg'} alt="Portrait" />
              </Columns.Column>
            </Columns>
          </Columns.Column>
        </Columns>
      </Hero.Body>
    </Hero>
  )
}

export default BulmaHeading
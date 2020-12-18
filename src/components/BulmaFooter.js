import React from 'react'
import { Footer, Container, Image } from 'react-bulma-components'

const BulmaFooter = () => {

  return (
    <Footer backgroundColor="white">
      <Container>
        <div className="content has-text-centered" style={{ paddingTop: '5em' }}>
          <p style={{ marginTop: '5em' }}>Made by Ville Manninen. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.</p>
          <div style={{ marginTop: '5em' }}>
            <span>
              <a className="image is-128x128 is-inline-block" href="https://www.helsinki.fi/fi/tietojenkasittelytiede">
                <Image src={process.env.PUBLIC_URL + '/hy.png'} alt="hy-logo" />
              </a>
              <a className="image is-128x128 is-inline-block" href="https://github.com/Viltska">
                <Image src={process.env.PUBLIC_URL + '/github.png'} alt="github-logo" />
              </a>
            </span>
          </div>
        </div>
      </Container>
    </Footer >
  )
}

export default BulmaFooter
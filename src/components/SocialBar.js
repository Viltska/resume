import React from 'react'

import { Section } from 'react-bulma-components'

const SocialBar = () => {

  return (
    <Section>
      <div className="field is-grouped">
        <a className="button is-medium is-linkedin control" href="https://www.linkedin.com/in/ville-manninen-a1994283/">
          <span className="icon">
            <i className="fab fa-linkedin"></i>
          </span>
          <span>LinkedIn</span>
        </a>
        <a className="button is-medium is-github control" href="https://github.com/Viltska">
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
          <span>GitHub</span>
        </a>
        <a className="button is-medium is-google control" href="mailto:vw.manninen@gmail.com">
          <span className="icon">
            <i className="fab fa-google"></i>
          </span>
          <span>Email</span>
        </a>
      </div>
    </Section>
  )
}

export default SocialBar
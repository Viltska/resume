import React from 'react'
import { Heading, Content, Box, Section } from 'react-bulma-components'

const About = () => {

  const sections = [
    `I'm a computer science enthusiast and a student currently located in Helsinki area. ` +
    `I found great interest in programming ever since I found out about it and fell in love ` +
    `with the problem solving challenges and endless room for improvement it offers. ` +
    `The more I learn new skills the more I discover ideas and areas where I can improve ` +
    `myself, this has driven me to continiously trying to improve myself. `,

    `I started out programming when my friend introduced me to an online Java course made by the ` +
    `University of helsinki, I have always been interested in computers and I was instantly hooked. ` +
    `I finished the course and applied to the University of Helsinki where I got the opportunity to learn even more. ` +
    `Since then I have learned many new languages including React and Python, and importantly learned the skills needed` +
    `to learn even more on my own.`,

    `My goal is to keep improving myself and never stop learning about this wonderful industry. ` +
    `I feel lucky to have found a career that keeps me interested and doesn't feel like a task. ` +
    `During my studies the best experiences have been during group projects and the syngergy you get by ` +
    `beeing part of a great team. This is unfortunatley uncommon in university studies so I am looking forward ` +
    `to getting my first job and getting the opportunity to work with and learn from experienced developers.`
    ,
    'In my free time I like to focus on my hobbies which include tennis, football and other sports, ' +
    `I have found that as in programming I enjoy sports where you can improve yourself over time. ` +
    `Sports has helped me balance the unfortunate side effect of programming wich is spending alot of time infront ` +
    `of the computer.`,
  ]

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
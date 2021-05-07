import React from "react"
import { css } from "@emotion/react"

import Section from "components/Section"
import Header from "components/Header"
import Project from "components/Project"
import { projectsList } from "data/projects"

const projectsListStyles = (theme) => css`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${theme.mediaQueries.tablet} {
    flex-direction: row;
    justify-content: center;
    margin-top: 45px;
  }
`

const Projects = () => {
  return (
    <Section bgcolor="secondary">
      <Header
        subheading="NASZE PROJEKTY"
        heading="A to nasze ostatnie <strong>elektrownie</strong>"
        justify="center"
        color="white"
      />
      <div className="projects-list" css={projectsListStyles}>
        {projectsList.map(({ place, installationSize, image }) => (
          <Project
            key={image}
            installationSize={installationSize}
            place={place}
            image={image}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects

import React, { useEffect, useState } from 'react'
import '../css/Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState(null);
  
  const getProjectData = async () => {
      const response = await fetch('./projects.json');
      const data = await response.json();
      setProjects(data);
  };

  useEffect(() => {
      getProjectData()
  }, []);

  const loaded = () => (
    projects.reverse()
      .map((p, idx) => <Project project={p} pidx={idx} key={idx} />)
  );    

  return projects ? loaded() : <h2>Loading ...</h2>
}

const Project = ({ project, pidx }) => {
  return (
    <div key={pidx}>
      <div><h2 className="smaller-h2">{project.name}</h2></div>
      <div className="projects">
        <div className="images">
        {
          project.image.map((img, idx) => {
            let oneImage = project.image.length === 1 ? {width: '100%'} : {};
            return <div key={idx} className="image" style={oneImage}><img src={img} height="450px" alt={project.name} /></div>
          })
        }
        </div>
      </div>
      <div className="buttons">
        {
          project.git.map((git, idx) => (
            <a href={git} key={idx} target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
          ))
        }
        {
          project.live.map((live, idx) => (
            <a href={live} key={idx} target="_blank" rel="noreferrer">
              <button target="_blank">Demo</button>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Projects

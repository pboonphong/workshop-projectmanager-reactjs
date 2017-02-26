import React, { Component } from 'react';
import Project from './Project'

class Projects extends Component {
  deleteProject(id) {
    this.props.deleteProject(id);
  }

  render() {
    let projects;
    if (this.props.projects) {
      projects = this.props.projects.map(project => {
        return (
          <Project key={project.title} project={project} deleteProject={this.deleteProject.bind(this)}/>
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projects}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  deleteProject: React.PropTypes.func
}

export default Projects;

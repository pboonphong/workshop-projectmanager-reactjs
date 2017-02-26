import React, { Component } from 'react';

class Project extends Component {
  deleteProject(id) {
    this.props.deleteProject(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} [<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>]
      </li>
    );
  }
}

Project.propTypes = {
  project: React.PropTypes.object,
  deleteProject: React.PropTypes.func
}

export default Project;

import React from "react";
import { storiesOf, action } from "@storybook/react";

class TopDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  addNewDirectory = () => {
    this.setState({ isEditing: true });
  };

  finishEditing = newDirName => {
    this.setState({ isEditing: false });
    //dispatch action to add new directory
  };

  render() {
    const { title, hasLowerDir, children } = this.props;
    const { isEditing } = this.state;

    return (
      <li class="top-directory">
        {title}
        {hasLowerDir && (
          <button class="list-directory-button" onClick={this.addNewDirectory}>
            +
          </button>
        )}
        {children}
        {isEditing && (
          <AddDirectoryTextfield finishEditing={this.finishEditing} />
        )}
      </li>
    );
  }
}

class AddDirectoryTextfield extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  updateValue = event => {
    this.setState({ value: event.target.value });
  };

  finishEditing = () => {
    this.props.finishEditing(this.state.value);
  };

  render() {
    return [
      <input
        type="text"
        value={this.state.value}
        onChange={this.updateValue}
      />,
      <button onClick={this.finishEditing}> add</button>
    ];
  }
}

const SubDirectory = ({ title }) => {
  return (
    <li>
      {title}
      <button class="list-directory-button">-</button>
    </li>
  );
};

const Sidebar = ({ learnDirectoryTitles }) => {
  return (
    <sidebar>
      <ul>
        <TopDirectory title="Learn" hasLowerDir={true}>
          <ul class="sub-directories">
            {learnDirectoryTitles.map(title => <SubDirectory title={title} />)}
          </ul>
        </TopDirectory>
        <TopDirectory title="Project" hasLowerDir={false} />
        <TopDirectory title="Teach" hasLowerDir={false} />
      </ul>
    </sidebar>
  );
};

storiesOf("Sidebar", module).add("default", () => (
  <Sidebar learnDirectoryTitles={["tutorials", "examples", "videos"]} />
));

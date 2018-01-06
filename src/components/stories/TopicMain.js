import React from "react";
import { storiesOf, action } from "@storybook/react";

import { Button } from "./button";

const Link = ({ url, title }) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

class AddLinkField extends React.Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };
  }

  updateUrl = event => {
    this.setState({ url: event.target.value });
  };

  render() {
    return [
      <input
        type="text"
        class="text-field add-topic-field"
        placeholder="タイトル"
      />,
      <input
        type="text"
        class="text-field add-topic-field"
        placeholder="URL"
        value={this.state.url}
        onChange={this.updateUrl}
      />,
      <Button text="Add New Topic" />
    ];
  }
}

const LinksField = ({ links }) => {
  return [
    <h3>Links</h3>,
    <ul>{links.map(link => <Link {...link} />)}</ul>,
    <AddLinkField />
  ];
};

class MemoField extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      content: ""
    };
  }

  enterEditMode = () => {
    this.setState({
      editing: true,
      content: this.props.content
    });
  };

  saveContent = () => {
    this.setState({
      editing: false
    });
    //dispach action to save content
  };

  renderMemoContent = () => {
    if (this.state.editing) {
      return [
        <button onClick={this.saveContent}>保存する</button>,
        <textarea>{this.state.content}</textarea>
      ];
    } else {
      return [
        <button onClick={this.enterEditMode}>編集する</button>,
        <p>{this.props.content}</p>
      ];
    }
  };

  render() {
    return [<h3>Memo</h3>, this.renderMemoContent()];
  }
}

storiesOf("LinksField", module).add("default", () => (
  <LinksField
    links={[
      { url: "example.com", title: "hogehoge tutorial" },
      { url: "example.com", title: "fuga tutorial" }
    ]}
  />
));

storiesOf("MemoField", module).add("default", () => (
  <MemoField content="ほにゃらら" />
));

import { configure } from "@storybook/react";
import "../css/style.css";

const req = require.context("../src/components/stories", true, /.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import { configure } from "@storybook/react";
import "../css/style.css";

function loadStories() {
  require("../src/components/stories/Header");
  require("../src/components/stories/inputFields");
  require("../src/components/stories/Sidebar");
}

configure(loadStories, module);

import React from "react";
import { storiesOf, action } from "@storybook/react";

storiesOf("breadcrumbs", module).add("directories-breadcrumbs", () => (
  <ul class="directories-breadcrumbs">
    <li>React</li>
    <li>Learn</li>
    <li>Tutorials</li>
  </ul>
));

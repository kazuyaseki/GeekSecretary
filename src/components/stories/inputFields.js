import React from "react";
import { storiesOf, action } from "@storybook/react";

storiesOf("Select button", module).add("sort-list", () => (
  <select class="list-sort-select">
    <option>登録順</option>
    <option>五十音順</option>
  </select>
));

storiesOf("textfield", module).add("filter", () => (
  <input type="text" class="text-field filter-field" />
));

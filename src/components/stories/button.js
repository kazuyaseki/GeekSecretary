import React from "react";
import { storiesOf, action } from "@storybook/react";

export const Button = ({ text }) => <button class="button">{text}</button>;

storiesOf("button", module).add("button default", () => (
  <Button text="Add New Topic" />
));

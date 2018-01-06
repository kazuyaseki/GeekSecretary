import React from "react";
import { storiesOf, action } from "@storybook/react";

storiesOf("Global Header", module).add("plain", () => (
  <header>
    <a href="/" class="logo">
      GeekSecretary
    </a>
    <nav class="nav-list nav-pages">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/20/github-20.png" />
        </li>
      </ul>
    </nav>

    <nav class="nav-list nav-settings">
      <ul>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </nav>
  </header>
));

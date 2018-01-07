import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Layout(props: { children: any }) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        GeekSecretary
      </a>
      <nav className="nav-list nav-pages">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/20/github-20.png" />
          </li>
        </ul>
      </nav>

      <nav className="nav-list nav-settings">
        <ul>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/kazuyaseki/GeekSecretary">Github</a>
    </footer>
  );
};

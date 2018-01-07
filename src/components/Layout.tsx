import * as React from "react";
import { NavLink } from "react-router-dom";

import { auth, googleAuthProvider } from "../common/firebase";

export default function Layout(props: {
  authorized: boolean;
  login: (result: any) => void;
  children: any;
}) {
  const popupLogin = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        props.login(result);
      })
      .catch(function(error: Error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header authorized={props.authorized} onClick={popupLogin} />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

interface HeaderProps {
  authorized: boolean;
  onClick: () => void;
}

const Header: React.SFC<HeaderProps> = props => {
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
          <li onClick={props.onClick}>
            {props.authorized ? "Logout" : "Login"}
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/kazuyaseki/GeekSecretary" target="_blank">
        Github
      </a>
    </footer>
  );
};

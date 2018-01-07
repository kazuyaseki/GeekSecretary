import React from "react";
import { storiesOf, action } from "@storybook/react";

const SettingsSidebarOption = ({ title, selected }) => {
  return <li class={selected ? "selected" : ""}>{title}</li>;
};

const SettingsSidebar = ({ titles, selectedTitle }) => {
  return (
    <aside class="settings-sidebar">
      <ul>
        {titles.map(title => (
          <SettingsSidebarOption
            title={title}
            selected={title === selectedTitle}
          />
        ))}
      </ul>
    </aside>
  );
};

storiesOf("SettingsSidebar", module).add("default", () => (
  <SettingsSidebar
    titles={["認証情報", "デフォルトディレクトリ", "メモテンプレート"]}
    selectedTitle="デフォルトディレクトリ"
  />
));

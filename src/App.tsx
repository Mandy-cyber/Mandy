import React, { useState } from 'react';
import { ReactTerminal } from "react-terminal";
import {colors} from './style/colors.ts';
import { HomePageBody } from './App.styles.ts';
import { PAGES } from "./constants.ts";
import { 
  welcomeMessage, 
  listPages, 
  helpMessage 
} from './commands.tsx';

function App() {
  const ROOT_PAGE: string = "~";
  const [pwd, setPwd] = useState(ROOT_PAGE);


  const commands = {
    // GENERAL
    whoami: "mandy-cyber",
    pwd: pwd,
    help: helpMessage,

    // LIST FILES
    ls: () => {
      if (pwd === ROOT_PAGE) {
        return listPages;
      } else {
        return <p>Nothing to see here...</p>
      }
    },

    // CHANGE DIRECTORY
    cd: (directory: string) => {
      if (directory === "..") {
        setPwd(ROOT_PAGE)
      } else {
        if (PAGES.includes(directory) && pwd === ROOT_PAGE) {
          setPwd(pwd + "/" + directory)
        } else {
          return <p>bash: cd: {directory}: No such file or directory</p>
        }
      }
    }
  };

  return (
    <>
    <HomePageBody>
  
        <ReactTerminal
            welcomeMessage={welcomeMessage}
            prompt={"stranger@mandy-world:" + pwd + " $"}
            commands={commands}
            themes={{
              "custom-theme": {
                themeBGColor: colors.DARK_GRAY,
                themeColor: colors.LIGHT_PURPLE,
                themePromptColor: colors.PINK
              }
            }}
            theme="custom-theme"
        />

    </HomePageBody>
  </>
  );
}

export default App;

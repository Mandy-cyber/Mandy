import React, { useState } from 'react';
import { ReactTerminal } from "react-terminal";
import {colors} from './style/colors.ts';
import { HomePageBody } from './App.styles.ts';
import { PAGES, EXTERNAL_PAGES } from "./constants.ts";
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
    whoami: "stranger",
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
    },

    // VIEW EXTERNAL PAGES
    view: (site: string) => {
      site = site.toLowerCase();
      if (EXTERNAL_PAGES.includes(site)) {
        const url: string = 
          site === "-github" ? 
          "https://github.com/Mandy-cyber" : 
          "https://www.linkedin.com/in/amanda-rodriques-725613217/"
        ;
        window.open(url, "_blank");
      } else {
        return <p>did you mean <b><code>view -github</code></b> or <b><code>view -linkedin</code></b> ?</p>
      }
    },

    // SEE RESUME
    resume: () => {
      window.open("https://drive.google.com/file/d/1E7OWa_yZtrIkPn9Zk9T02iRZx3no2Aje/view?usp=sharing", "_blank")
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

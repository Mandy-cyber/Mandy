import React, { useState } from 'react';
import { ReactTerminal } from "react-terminal";
import {colors} from './style/colors.ts';
import { HomePageBody } from './App.styles.ts';
import { welcomeMessage, listPages } from './commands.tsx';
import { PAGES } from "./constants.ts"

function App() {
  const [pwd, setPwd] = useState("~");


  const commands = {
    whoami: "mandy-cyber",
    ls: listPages,
    pwd: pwd,

    cd: (directory: string) => {
      if (directory in PAGES) {
        setPwd(pwd + "/" + directory)
      } else {
        return <p>bash: cd: {directory}: No such file or directory</p>
      }
    }
  };

  return (
    <>
    <HomePageBody>
    
      <ReactTerminal
          welcomeMessage={welcomeMessage}
          prompt={"stranger@mandy-world:" + pwd + "$"}
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

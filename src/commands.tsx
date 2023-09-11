import React from "react";
import { PAGES } from "./constants.ts";


const welcomeMessage = (
    <div>
        <p>Hey there! Type <b><code>help</code></b> to get started</p>
    </div>
);


const pages = PAGES.map(page => <p>-- {page}</p>);
const listPages = (
    <div>
        {pages}
    </div>
);


const helpMessage = (
    <div>
        <br/>
        <b>help: help</b><br />
        Display information about builtin commands

        <br/><br/>
        <b>Commands:</b>
        <br/>All the commands you can run in this terminal<br/>
        <br/> __ <b><code>cd [directory]</code></b>
        <br/> |___ change to the given directory
        <br/> 
        <br/> __ <b><code>ls</code></b>
        <br/> |___ list visible files and directories
        <br/>
        <br/> __ <b><code>clear</code></b>
        <br/> |___ clear the terminal
        <br/>
        <br/> __ <b><code>pwd</code></b>
        <br/> |___ echo the present working directory
        <br/>
        <br/> __ <b><code>whoami</code></b>
        <br/> |___ see who you are...
        {/* <br/>
        <br/> __ <b><code>joke</code></b>
        <br/> |___ tell an (admittedly awful) joke */}
        <br/>
        <br/> __ <b><code>resume</code></b>
        <br/> |___ opens the resume of Mandy-cyber
        <br/>
        <br/> __ <b><code>view [-github, -linkedin]</code></b>
        <br/> |___ go to my GitHub or LinkedIn profile



        <br/><br/>
        <br/> __ <b><code>help</code></b>
        <br/> |___ re-display this information

    </div>
);


export { welcomeMessage, listPages, helpMessage };
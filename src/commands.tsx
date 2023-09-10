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
    <pre>
        <b>help: help</b><br />
        Display information about builtin commands

        <br/><br/>
        <b>Commands:</b>
        <br/>All the commands you can run in this terminal<br/>
        <br/> __ <code>cd directory</code>
        <br/> |___ change to the given directory
        <br/> 
        <br/> __ <code>ls</code>
        <br/> |___ list visible files and directories
        <br/>
        <br/> __ <code>clear</code>
        <br/> |___ clears the terminal
        <br/>
        <br/> __ <code>pwd</code>
        <br/> |___ echo the present working directory
        <br/>
        <br/> __ <code>whoami</code>
        <br/> |___ see who you are...
        <br/>
        <br/> __ <code>joke</code>
        <br/> |___ tell an (admittedly awful) joke
        <br/>
        <br/> __ <code>resume</code>
        <br/> |___ opens the resume of Mandy-cyber
        <br/>
        <br/> __ <code>view [-github, -linkedin]</code>
        <br/> |___ goes to GitHub or LinkedIn profile



        <br/><br/>
        <br/> __ <code>help</code>
        <br/> |___ re-display this information

    </pre>
);


export { welcomeMessage, listPages, helpMessage };
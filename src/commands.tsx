import React from "react";
import { PAGES } from "./constants.ts"


const welcomeMessage = (
    <div>
        <p>Hey there! Type <code>help</code> to get started</p>
    </div>
);


const pages = PAGES.map(page => <p>{page}</p>);
const listPages = (
    <div>
        {pages}
    </div>
);


export { welcomeMessage, listPages };
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { TerminalContextProvider } from "react-terminal";
import {NextUIProvider} from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NextUIProvider>
      <TerminalContextProvider>
      <div className="w-screen h-screen dark text-foreground bg-background p-8 flex items-start justify-center">
        <App/>
      </div>
      </TerminalContextProvider>
    </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

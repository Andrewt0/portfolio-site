import React from 'react';
import logo from '../logo.svg';

type MainProps = {
    message: string;
}

export const Main:React.FC<MainProps> = ({message}) => {
    return (
        <div className="Main">
          <header className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <p className="test">
              {message}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

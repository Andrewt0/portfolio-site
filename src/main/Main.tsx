import React from 'react';

import { NavBar } from '../shared/navbar/navbar';
import data from '../shared/navbar/navcontents.json'

type MainProps = {
    message: string;
}

export const Main:React.FC<MainProps> = ({message}) => {
    return (

        <div className="Main">
            <div className="Main-header">
              <NavBar contents={data.contents}/>
            </div> 
        </div>
      );
}

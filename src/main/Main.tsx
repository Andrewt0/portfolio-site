import React from 'react';

import { NavBar } from '../shared/navbar/navbar';


export const Main:React.FC = () => {
    return (

        <div className="Main">
            <div className="Main-header">
              <NavBar />
            </div> 
            <div className="Main-body">
              <p>
              top tier<br/>
              10/10 would recommed<br/>
              if i had a company that was hiring<br/>
              no matter what position<br/>
              yould get the job<br/>
              -Nico
              </p>
            </div>
        </div>
      );
}

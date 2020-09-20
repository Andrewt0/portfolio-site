import React from 'react';

import { NavLink } from "./navlink";

interface NavItemProps {
    title: string;
    subLinks?: SubLinks[]; 
    referenceLink?: string;
}

export interface SubLinks {
    title?: string;
    referenceLink?: string;
}


export const NavItem:React.FC<NavItemProps> = (props) => {
    //dropdown contents
    if(props.subLinks){
        const navItems = props.subLinks.map((subLinks, idx)=>
        //checks that both properties were properly set in navcontents.json
        {
            console.log(subLinks);
            if(subLinks.title && subLinks.referenceLink){
                return(
                    <NavLink title={ subLinks.title } referenceLink={ subLinks.referenceLink } key={ idx }/>
                );
            } else {
                //passes default values if either were not properly set
                return(
                    <NavLink title="Undefined" referenceLink="" key={idx}  />
                );
            }
        }
       
    );
        return(
            <div className="dropdown">
                <button className="dropdown-btn">{props.title}</button>
                <div className="dropdown-contents">
                    {navItems}
                </div>
            </div>
        );
    } 
    //single item
    if(props.referenceLink){
        return(
            <NavLink title={props.title} referenceLink={props.referenceLink}/>
        );
    }
    //default if error in navcontent.json
    return(
        <NavLink title={props.title} referenceLink=""/>
        );
  
}
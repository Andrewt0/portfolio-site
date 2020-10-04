import React from 'react';

import { NavLink } from "./navlink";
/**
 * builds individual components of Navbar to form dropdowns or links via
 * navlink.tsx
 * 
 * to update contents of Navbar update navcontents.json
 * 
 * Propname changes to be updated in navcontents.json, navbar.tsx and navlink.tsx
 */

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
            const title = subLinks.title ? subLinks.title : "Undefined";
            const referenceLink = subLinks.referenceLink ? subLinks.referenceLink : "";

            return (
                <NavLink title={ title } referenceLink={ referenceLink } key={ idx }/>
            );
           
         
        }
       
    );
        return(
            <div className="dropdown">
                <button className="dropdown-btn">{props.title}</button>
                <div className="dropdown-content">
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
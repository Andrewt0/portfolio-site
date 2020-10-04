import React from 'react';
import { NavItem, SubLinks } from "./navitem";
import data from './navcontents.json'

/**
 * Builds object components for Navbar
 * 
 * to update contents of Navbar update navcontents.json
 * 
 * Propname changes to be updated in navcontents.json, navitem.tsx and navlink.tsx
 */

interface Content {
    title: string;
    subLinks?: SubLinks[]; 
    referenceLink?: string;
}


export const NavBar:React.FC = () => {
    const contents : Content[] = data.contents;
    const navItems = contents.map((contents, idx)=>
        {
            const title = contents.title ? contents.title : "Undefined";
            const referenceLink = contents.referenceLink ? contents.referenceLink : "";
                //if item has sublinks for dropdown
            if(contents.subLinks){
                return(
                     <NavItem title={title} subLinks = {contents.subLinks} key={idx}/>
                );
            }
            return(
                <NavItem title={contents.title} referenceLink = {referenceLink} key={idx}/>
            );
        }
    );


    return (
        <div className="navbar"> 
            {navItems}
        </div>
    );
}
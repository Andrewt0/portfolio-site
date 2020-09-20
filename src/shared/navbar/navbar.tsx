import React from 'react';
import { NavItem, SubLinks } from "./navitem";

interface NavBarProps {
    contents: Content[];
}
interface Content {
    title?: string;
    subLinks?: SubLinks[]; 
    referenceLink?: string;
}


export const NavBar:React.FC<NavBarProps> = ({contents}) => {

    const navItems = contents.map((contents, idx)=>
        {
            //makes sure title was properly set in navcontents.json
            if(contents.title){
                //if item has sublinks for dropdown
                if(contents.subLinks){
                    return(
                        <NavItem title={contents.title} subLinks = {contents.subLinks} key={idx}/>
                    );
                }
                if(contents.referenceLink){
                    return(
                        <NavItem title={contents.title} referenceLink = {contents.referenceLink} key={idx}/>
                    );
                }
            }
            //default return if missing information to form proper item
            return(
                <NavItem title="Undefined" referenceLink="" key={idx}/>
            );
        }
    );


    return (
        <div className="navbar"> 
            {navItems}
        </div>
    );
}
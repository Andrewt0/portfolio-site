import React from 'react';
/**
 * builds individual components of Navbar
 * 
 * to update contents of Navbar update navcontents.json
 * 
 * Propname changes to be updated in navcontents.json, navbar.tsx and navitem.tsx
 */


interface NavLinkProps  {
    title: string;
    referenceLink: string;

}


export const NavLink:React.FC<NavLinkProps> = ({title, referenceLink}) => {
    return (
    <a href={ referenceLink }>{ title }</a>
    );
}
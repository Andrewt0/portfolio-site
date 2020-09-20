import React from 'react';
/**
 * creates and return item link component
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
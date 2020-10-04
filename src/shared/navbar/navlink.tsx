import React from "react";

interface NavLinkProps {
  title: string;
  referenceLink: string;
}
/**
 * Creates refrence link for each navbar Item
 *
 * to update contents of Navbar update navcontents.json
 *
 * Propname changes to be updated in navcontents.json, navbar.tsx and navitem.tsx
 */
export const NavLink: React.FC<NavLinkProps> = ({ title, referenceLink }) => {
  return <a href={referenceLink}>{title}</a>;
};

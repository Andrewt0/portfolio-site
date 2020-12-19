import React from "react";

import { NavBar } from "./shared/navbar/navbar";
import { Main } from "./home/home";

/**
 * Main Component
 */
export const App: React.FC = () => {
  return (
    <div className="Main">
      <div className="Main-header">
        <NavBar />
      </div>
      <Main />
    </div>
  );
};

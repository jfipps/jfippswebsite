import React, { useEffect, useState } from "react";

const PortfolioContext = React.createContext();

const PortfolioProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");
  const [navState, setNavState] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{ activeTab, setActiveTab, navState, setNavState }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };

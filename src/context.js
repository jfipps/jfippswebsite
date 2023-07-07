import React, { useEffect, useState } from "react";

const PortfolioContext = React.createContext();

const PortfolioProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <PortfolioContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };

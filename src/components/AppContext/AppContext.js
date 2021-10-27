import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextComponent = (props) => {
  const [sales, setSales] = useState([]);

  const objeto = {
    sales,
    setSales,
  };
  
  return <AppContext.Provider value={objeto}>
    {props.children}
  </AppContext.Provider>
};

export default AppContextComponent
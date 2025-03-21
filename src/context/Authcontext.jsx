import React, { createContext, useEffect, useState} from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const authContext = createContext();
const Authcontext = ({ children }) => {
  const [userData, setuserData] = useState( null);
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setuserData({employees, admin});
  }, [])


  return (
    <authContext.Provider value={userData}>
      <div>{children}</div>
    </authContext.Provider>
  );
};

export default Authcontext;

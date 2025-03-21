import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import Employeedashbord from "./components/dashbord/Employeedashbord";
import Admindashbord from "./components/dashbord/Admindashbord";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import Authcontext, { authContext } from "./context/Authcontext";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setloggedUserData] = useState(null);
  const authData = useContext(authContext);
  useEffect(() => {
    setLocalStorage();
  });
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedUserData(userData.data);
    }
  }, []);

  const newLocal = (email, password) => {
    if (authData) {
      const admin = authData.admin?.find(
        (a) => a.email === email && a.password === password
      );
      if (admin) {
        setUser("admin");
        setloggedUserData(admin);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
        return;
      }
      const employee = authData.employees?.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setloggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
      alert("Invalid email or password");
    } else {
      // Handle case where authData is null or undefined
      alert("Authentication data is not available. Please try again later.");
    }
  };

  const handelLogin = newLocal;

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}

      {user == "admin" ? <Admindashbord changeUser={setUser} data={loggedUserData} /> : ""}
      {user == "employee" ? <Employeedashbord changeUser={setUser} data={loggedUserData} /> : ""}
    </>
  );
};

export default App;

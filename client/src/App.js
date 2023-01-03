import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpotifyContext } from "./SpotifyContext";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, []);
  // if (!isAuthenticated)
  //   return (
  //     <Login
  //       error={"please login"}
  //       setIsAuthenticated={setIsAuthenticated}
  //       setUser={setUser}
  //     />
  //   );

  return (
    <SpotifyContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <Router>
        {/* <NavBar  /> */}
        {/* <Signup /> */}
        {/* <Logout /> */}
        <Routes>
          {/* <Route
            path='/login'
            element={
              <Login
                setUser={setUser}
                setIsAuthenticated={setIsAuthenticated}
              /> */}

          {/* <Route path="/" element={<Home />}/> */}
          {/* <Route path="/logout" element={<Logout />}/> */}
          <Route path='/' element={<Signup />} />
        </Routes>
      </Router>
    </SpotifyContext.Provider>
  );
};

export default App;

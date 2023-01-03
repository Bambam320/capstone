import React, { useContext } from "react";
import { SpotifyContext } from "../SpotifyContext";

function Logout() {
  const { setUser, setIsAuthenticated } = useContext(SpotifyContext);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setIsAuthenticated(false);
      setUser(null);
    });
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

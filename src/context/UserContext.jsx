import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider( props) {
  let [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;

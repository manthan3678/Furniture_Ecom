import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();
const Authorization = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const localData = localStorage.getItem("token");
    console.log(localData);
    if (localData) {
      const parsedData = JSON.parse(localData);
      setAuth({
        ...auth,
        user: parsedData.user,
        token: parsedData.token,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${parsedData.token}`;
      //  axios.defaults.headers.common["Authorization"] = `Bearer ${parsed.token}`;
    }
    setLoading(false); // finish loading
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { Authorization, useAuth };

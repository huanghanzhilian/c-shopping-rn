import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children, userCredentials }) {
  const [user, setAuth] = useState(userCredentials)
  console.log('AuthProvider userCredentials', userCredentials)
  console.log('AuthProvider user', user)
  return (
    <AuthContext.Provider
      value={{
        signIn: (userCredentials) => setAuth(userCredentials),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
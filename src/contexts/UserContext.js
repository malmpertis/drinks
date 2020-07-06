import React, { useState, useEffect } from 'react';
import { userInfo } from '../services/authService';

const UserStateContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await userInfo();
        const picture = JSON.parse(info.attributes.picture);
        setUser({
          ...info,
          picture: picture.data.url,
        });
      } catch (e) {
        setUser(null);
      }
    };

    fetchData();
  }, []);

  return (
    <UserStateContext.Provider value={user}>
      {children}
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}

export { UserProvider, useUserState };

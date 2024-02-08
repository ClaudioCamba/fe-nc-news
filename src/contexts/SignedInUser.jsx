import { createContext } from 'react';
import { useState } from 'react';

export const SignedInUserContext = createContext();

export const SignedInUserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'grumpy19', 
    name: 'Paul Grump', 
    avatar_url: 'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013'
});

  return (
    <SignedInUserContext.Provider value={{ user, setUser }}>
      {children}
    </SignedInUserContext.Provider>
  );
};
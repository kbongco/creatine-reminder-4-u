import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';

const auth = getAuth();

export const useCurrentUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return user ? user.uid : null;
};

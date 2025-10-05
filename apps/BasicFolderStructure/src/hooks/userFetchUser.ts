import {useEffect, useState} from "react";
import {fetchUser, type User} from "../api/userApi";

export function useFetchUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUser();
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user"+err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return { user, loading, error };
}

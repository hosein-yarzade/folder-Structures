import { useEffect, useState } from "react";
import { fetchUser } from "../api/userApi";
import type { User } from "../api/userApi";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser();
        setUser(data);
      } catch {
        setError("Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return { user, loading, error };
}

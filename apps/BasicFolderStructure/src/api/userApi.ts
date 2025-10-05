export interface User {
  id: number;
  name: string;
  bio: string;
  avatar: string;
}

export async function fetchUser(): Promise<User> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Alex Johnson",
        bio: "Frontend Developer passionate about React, TypeScript, and UI design.",
        avatar: "/src/assets/avatar.png",
      });
    }, 1000);
  });
}

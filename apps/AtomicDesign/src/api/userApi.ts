export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    bio: string;
  }
  
  export async function fetchUser(): Promise<User> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "Jane Doe",
          email: "jane.doe@example.com",
          avatar: "https://i.pravatar.cc/150?img=5",
          bio: "Frontend Engineer | React + TypeScript enthusiast 🚀",
        });
      }, 1000);
    });
  }
  
import { mockUsers } from '@/data/mockUsers';
import { Credentials } from '@/types/auth';

export async function authenticateUser({ username, password, role }: Credentials) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = mockUsers.find(
    (u) => u.username === username && 
          u.password === password && 
          u.role === role
  );

  if (user) {
    // Remove password from returned user object
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
}
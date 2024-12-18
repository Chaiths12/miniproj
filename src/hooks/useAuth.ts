import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '@/types/auth';
import { authenticateUser } from '@/lib/auth';

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (username: string, password: string, role: 'student' | 'faculty') => {
        try {
          const user = await authenticateUser({ username, password, role });
          if (user) {
            set({ user });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Login error:', error);
          return false;
        }
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      // Only store the user data, not the methods
      partialize: (state) => ({ user: state.user }),
    }
  )
);
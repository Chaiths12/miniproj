export interface User {
  id: string;
  username: string;
  role: 'student' | 'faculty';
  name: string;
  department?: string;
  year?: string;
  email?: string;
  phone?: string;
  studentId?: string;
}

export interface AuthState {
  user: User | null;
  login: (username: string, password: string, role: 'student' | 'faculty') => Promise<boolean>;
  logout: () => void;
}

export interface Credentials {
  username: string;
  password: string;
  role: 'student' | 'faculty';
}
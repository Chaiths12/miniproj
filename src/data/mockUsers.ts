import { User } from '@/types/auth';

interface MockUser extends User {
  password: string;
}

export const mockUsers: MockUser[] = [
  {
    id: '1',
    username: 'faculty1',
    password: 'faculty123',
    role: 'faculty',
    name: 'Dr. Smith',
    department: 'Computer Science',
    email: 'smith@college.edu',
    phone: '+1 234 567 890'
  },
  {
    id: '2',
    username: 'student1',
    password: 'student123',
    role: 'student',
    name: 'John Doe',
    department: 'Computer Science',
    year: '3rd',
    studentId: 'CS2021045',
    email: 'john.doe@college.edu',
    phone: '+1 234 567 890'
  }
];
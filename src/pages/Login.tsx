import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { useToast } from '@/components/ui/use-toast';
import { GraduationCap, School2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from '@/components/auth/LoginForm';

export default function Login() {
  const [role, setRole] = useState<'student' | 'faculty'>('student');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const { toast } = useToast();
  const { login } = useAuth();

  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      setIsLoading(true);
      const success = await login(values.username, values.password, role);
      
      if (success) {
        navigate(`/${role}`);
      } else {
        // toast({
        //   variant: 'destructive',
        //   title: 'Login failed',
        //   description: 'Invalid username or password',
        // });
      }
    } catch (error) {
      // toast({
      //   variant: 'destructive',
      //   title: 'Error',
      //   description: 'An unexpected error occurred',
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to manage college events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={role} onValueChange={(value) => setRole(value as 'student' | 'faculty')} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Student
              </TabsTrigger>
              <TabsTrigger value="faculty" className="flex items-center gap-2">
                <School2 className="w-4 h-4" />
                Faculty
              </TabsTrigger>
            </TabsList>

            <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
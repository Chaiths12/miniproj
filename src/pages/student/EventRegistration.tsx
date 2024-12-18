import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Users, Trophy } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Tech Symposium 2024',
    type: 'technical',
    date: '2024-04-15',
    description: 'Annual technical symposium featuring coding competitions, hackathons, and technical workshops.',
    capacity: 100,
    registered: 45,
  },
  {
    id: 2,
    name: 'Cultural Night',
    type: 'cultural',
    date: '2024-04-20',
    description: 'A night of music, dance, and cultural performances showcasing student talents.',
    capacity: 200,
    registered: 78,
  },
  // Add more events...
];

export default function EventRegistration() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Event Registration</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {event.type}
                    </Badge>
                  </CardDescription>
                </div>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {event.registered}/{event.capacity} registered
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Register Now</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Event Registration</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Date: {event.date}</span>
                        <Badge variant="outline">
                          {event.type}
                        </Badge>
                      </div>
                      <Button className="w-full">Confirm Registration</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
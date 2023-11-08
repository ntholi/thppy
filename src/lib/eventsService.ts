import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Event {
  id: string;
  name: string;
  description: string;
  date: Date;
  location: string;
}

export async function getUpcomingEvents(): Promise<Event[]> {
  const q = query(collection(db, 'events'), where('date', '>', new Date()));
  const snapshot = await getDocs(q);
  const events: Event[] = [];
  snapshot.forEach((doc) => {
    const event = doc.data() as Event;
    event.id = doc.id;
    if (event.date instanceof Timestamp) {
      event.date = event.date.toDate();
    }
    events.push(event);
  });
  return events;
}

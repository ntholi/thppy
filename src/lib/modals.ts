import { FieldValue } from 'firebase/firestore';

export interface Event {
  id?: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  createdAt?: FieldValue;
}

export interface Post {
  id?: string;
  content: string;
  userId: string;
  userDisplayName: string;
  userPhotoURL: string;
  createdAt?: FieldValue;
}

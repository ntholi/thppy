import { FieldValue } from 'firebase/firestore';

export interface Post {
  content: string;
  userId: string;
  createdAt?: Date;
}

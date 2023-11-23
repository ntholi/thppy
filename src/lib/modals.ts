import { FieldValue } from 'firebase/firestore';

export interface Post {
  id?: string;
  content: string;
  userId: string;
  createdAt?: FieldValue;
}

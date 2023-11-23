import { FieldValue } from 'firebase/firestore';

export interface Post {
  id?: string;
  content: string;
  userId: string;
  userDisplayName: string;
  userPhotoURL: string;
  createdAt?: FieldValue;
}

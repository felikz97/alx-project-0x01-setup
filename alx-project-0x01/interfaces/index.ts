import { UserProps } from '@/interfaces';
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// interfaces/index.ts

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

/**
 * UserData
 * Mirrors the structure of a user object:
 * {
 *   "id": 1,
 *   "name": "Leanne Graham",
 *   "username": "Bret",
 *   "email": "Sincere@april.biz",
 *   "address": { … },
 *   "phone": "1-770-736-8031 x56442",
 *   "website": "hildegard.org",
 *   "company": { … }
 * }
 */
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

/**
 * UserModalProps
 * Props for a modal component that shows user details.
 * - isOpen: whether the modal is visible
 * - user: the user to display (or null if none selected)
 * - onClose: callback to close the modal
 */
export interface UserModalProps {
  isOpen: boolean;
  user: UserData | null;
  onClose: () => void;
  onSubmit: (post: UserProps) => void; // Callback for form submission
  onDelete?: (userId: number) => void; // Optional delete callback
}


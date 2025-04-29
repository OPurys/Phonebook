export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactsState {
  items: Contact[];
  loading: boolean;
}

export interface ContactProps {
  contact: Contact;
}

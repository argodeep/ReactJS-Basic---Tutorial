import { GET_CONTACTS, IS_SORTED } from './types';
import { User } from '../../models/user';

export const contactList = (contacts: User[]) => {
  return {
    type: GET_CONTACTS,
    data: contacts
  }
}
export const isSorted = (data: boolean) => {
  return {
    type: IS_SORTED,
    data: data
  }
}
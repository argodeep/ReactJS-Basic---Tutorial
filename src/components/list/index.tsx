import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import * as API from '../../services/axios';
import { useSelector, useDispatch } from 'react-redux';
import { contactList } from '../../services/redux/actions';
import { User } from '../../services/models/user';
import Filter from '../filter';
import Sort from '../sort';

function List(props: any) {
  const route = useHistory();
  const dispatch = useDispatch();
  const contacts: User[] = useSelector((state: any) => state.contacts);
  const [contactsBackup, setBackup] = useState<User[]>([]);

  async function fetchContacts() {
    const response = await API.fetchUsers();
    document.title = `${response.length} Contacts Found`;
    dispatch(contactList(response));
    setBackup([...response]);
  }

  function handleSort(event: boolean) {
    console.log('parent component received callback')
    if (event) {
      dispatch(contactList([...contacts].sort((a, b) => compare(a.name.first, b.name.first))))
    } else {
      dispatch(contactList([...contactsBackup]));
    }
  }

  function compare(a: any, b: any) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  function handleFilter(event: string) {
    if (event.length > 0) {
      dispatch(contactList([...contactsBackup].filter(contact => contact.name.first.toLowerCase().includes(event) || contact.name.last.toLowerCase().includes(event) || contact.name.title.toLowerCase().includes(event))))
    } else {
      dispatch(contactList([...contactsBackup]));
    }
  }

  useEffect(() => {
    console.log('List Mounted')
    if (!contacts.length) {
      fetchContacts();
    }
    return function () {
      console.log('List Unmounted')
    }
  }, [])

  return (
    <Fragment>
      <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
        <Filter text={'Search by name'} onChange={(event: string) => handleFilter(event)} />
        <Sort onChange={(event: boolean) => handleSort(event)} />
      </div>
      <p style={{ padding: 8, textAlign: 'center' }}>{contacts.length} contacts found</p>
      {
        contacts.map((contact: User, index: number) =>
          <div key={index} style={{ marginBottom: 8, display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={() => route.push('/list/' + (index + 1))}>
            <span>#{index + 1}</span>
            <span style={{ minWidth: 200 }}>{contact.name.title} {contact.name.first} {contact.name.last}</span>
            <span>{contact.phone}</span>
          </div>
        )
      }
    </Fragment>
  );
}

export default List;

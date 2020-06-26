import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import * as API from '../../services/axios';
import { useSelector, useDispatch } from 'react-redux';
import { contactList } from '../../services/redux/actions';
import { User } from '../../services/models/user';

function View(props: any) {
  const route = useHistory();
  const dispatch = useDispatch();
  const contacts: User[] = useSelector((state: any) => state.contacts);
  const [contact, setContact] = useState<User | any>(null);
  const index: number = Number(props.match.params.id) - 1;

  async function fetchContacts() {
    const response = await API.fetchUsers();
    document.title = `${response.length} Contacts Found`;
    dispatch(contactList(response));
    setContact(contacts[index]);
  }

  useEffect(() => {
    console.log('View Mounted');
    if (contacts === undefined || !contacts.length) {
      fetchContacts();
    } else {
      setContact(contacts[index]);
    }
    return () => {
      console.log('View Unmounted')
    };
  }, [index, contacts])

  return (
    <Fragment>
      <p style={{textAlign: 'center', cursor: 'pointer'}}>
        <span onClick={() => route.push('/list')}>Go back</span>
      </p>
      {contact &&
        <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
          <span>#{props.match.params.id}</span>
          <span style={{ minWidth: 200 }}>{contact?.name?.title} {contact?.name?.first} {contact?.name?.last}</span>
          <span>{contact?.phone}</span>
        </div>
      }
    </Fragment>
  );
}

export default View;

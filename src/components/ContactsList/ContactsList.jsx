import React from "react";
import {deleteContact} from 'redux/contacts/contactsOperations'
import {useSelector, useDispatch} from 'react-redux';

import { ListUl, ListLi, Span, ListP, Button } from "./ContactsList.styled";

export const ContactList = () => {
    
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const contactsList = filterContacts(contacts, filter);

    return (
        <ListUl>
            { 
            contactsList.map(({id, name, number}) => {
                return (
                    <ListLi key={id}>
                    <Span>{name}:</Span> 
                    <ListP>{number}</ListP>
                    <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                    </ListLi>
                )
            })}
        </ListUl>
    )}

  

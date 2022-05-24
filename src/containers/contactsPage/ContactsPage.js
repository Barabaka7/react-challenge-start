import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList.js"
import { ContactForm } from "../../components/contactForm/ContactForm.js"

export const ContactsPage = ({ contacts, addContact }) => {
  
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [isDuplicate, setIsDuplicate] = useState(false); 

  const handleSubmit = (e) => {

    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate){
     
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    if(contacts.some(e=>e.name === name)) {
      alert('This name already exists!')
      setIsDuplicate(true);
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm  handleSubmit={handleSubmit}
                      name={name}
                      phone={phone}
                      email={email}
                      setName={setName}
                      setPhone={setPhone}
                      setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrayToList={contacts}/>
      </section>
    </div>
  );
};

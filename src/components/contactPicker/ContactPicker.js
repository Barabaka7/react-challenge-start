import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option selected="selected">Nothing selected</option>
      { contacts.map( i => <option>{i.name}</option>)}
    </select>
  );
};

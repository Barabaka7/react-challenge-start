import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange} defaultValue={"DEFAULT"}>
      <option key={"id-"+0} value="DEFAULT" disabled>Nothing selected</option>
      { contacts.map( (i,j) => <option key={"id-"+j+1} value={i.name}>{i.name}</option>)}
    </select>
  );
};

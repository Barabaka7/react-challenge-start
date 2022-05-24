import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             id="name"
             value={name}
             placeholder="Input here your Name"
             onChange={e=>setName(e.target.value)}/>
      <input type="phone"
             id="tel" value={phone}
             pattern="^\+[0-9]{3}\s(\d+)\s\d{3}\s\d{2}\s\d{2}"
             placeholder="You should enter correct phone number in format +380 xx xxx xx xx"
             onChange={e=>setPhone(e.target.value)}/>
      <input type="email"
             id="email"
             value={email}
             placeholder="Input here your Email"
             onChange={e=>setEmail(e.target.value)}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

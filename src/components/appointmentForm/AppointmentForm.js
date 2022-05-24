import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="text"
           id="title"
           value={title}
           placeholder="Input here your title"
           onChange={e=>setTitle(e.target.value)}/>
    <input type="date"
           id="date"
           value={date}
           placeholder="Choose the date please"
           min={getTodayString()}
           onChange={e=>setDate(e.target.value)}/>
    <input type="time"
           id="time"
           value={time}
           placeholder="Choose the time"
           onChange={e=>setTime(e.target.value)}/>
      <ContactPicker onChange={e=>setContact(e.target.value)} contacts={contacts}/>     
    <input type="submit" value="Submit"/>
  </form>
  );
};

import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList.js"
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js"

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  contacts={contacts}
                          title={title}
                          contact={contact}
                          date={date}
                          time={time}
                          setTitle={setTitle}
                          setDate={setDate}
                          setContact={setContact}
                          setTime={setTime}
                          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arrayToList={appointments}/>
      </section>
    </div>
  );
};

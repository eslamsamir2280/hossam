import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const AdminBookings = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("appointments").onSnapshot((snapshot) => {
      const bookings = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.name + " - " + data.phone,
          start: data.date, // تاريخ الحجز
        };
      });
      setEvents(bookings);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}>
        📅 جدول الحجوزات
      </h2>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale="ar"
        slotMinTime="10:00:00"
        slotMaxTime="18:00:00"
        allDaySlot={false}
        events={events}
        eventColor="#007bff"
        height="auto"
      />
    </div>
  );
};

export default AdminBookings;

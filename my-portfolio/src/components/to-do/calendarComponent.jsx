// calendarComponent.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarComponent({ selectedDate, onDateChange }) {
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date)}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}

export default CalendarComponent;

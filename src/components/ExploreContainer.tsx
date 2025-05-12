import { IonDatetime } from "@ionic/react";
import React, { useState } from "react";
import "./ExploreContainer.css";

const getWeekDays = (dateStr: string) => {
  const inputDate = new Date(dateStr);
  const day = inputDate.getDay();

  // Calculate the Monday of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(inputDate);
  monday.setDate(inputDate.getDate() + diffToMonday);

  const week = [];

  for (let i = 0; i < 5; i++) {
    // Monday to Friday
    const currentDate = new Date(monday);
    currentDate.setDate(monday.getDate() + i);

    const yyyy = currentDate.getFullYear();
    const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dd = String(currentDate.getDate()).padStart(2, "0");

    week.push({
      date: `${yyyy}-${mm}-${dd}`,
      textColor: "#800080",
      backgroundColor: "#ffc0cb",
    });
  }

  return week;
};

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const ExploreContainer: React.FC = () => {
  const [date, setDate] = useState("2025-05-12");

  return (
    <div id="container">
      <IonDatetime
        presentation="date"
        onIonChange={(e: any) => {
          const date = new Date(e.detail.value);
          setDate(formatDate(date));
        }}
        highlightedDates={getWeekDays(date)}
      ></IonDatetime>
    </div>
  );
};

export default ExploreContainer;

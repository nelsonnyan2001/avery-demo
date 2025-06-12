import { IonDatetime } from "@ionic/react";
import React, { useState } from "react";
import "./ExploreContainer.css";

function getWeekDays(dateStr: string) {
  const inputDate = new Date(dateStr);
  const day = inputDate.getDay(); // 0 = Sunday, ..., 6 = Saturday

  // Find the Sunday of the current week
  const sunday = new Date(inputDate);
  sunday.setDate(inputDate.getDate() - day);

  const week = [];

  for (let i = 0; i < 7; i++) {
    // Sunday to Saturday
    const currentDate = new Date(sunday);
    currentDate.setDate(sunday.getDate() + i);

    const yyyy = currentDate.getFullYear();
    const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dd = String(currentDate.getDate()).padStart(2, "0");

    week.push({
      date: `${yyyy}-${mm}-${dd}`,
      textColor: "#800080",
      backgroundColor: "white",
    });
  }

  return week;
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const ExploreContainer: React.FC = () => {
  const [date, setDate] = useState("2025-05-12");

  return (
    <IonDatetime
      presentation="date"
      onIonChange={(e: any) => {
        const date = new Date(e.detail.value);
        setDate(formatDate(date));
      }}
      highlightedDates={getWeekDays(date)}
    ></IonDatetime>
  );
};

export default ExploreContainer;

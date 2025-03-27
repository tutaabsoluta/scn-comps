"use client"
import { Calendar } from "@/components/ui/calendar"
import { getDate } from "date-fns"
import React, { useState } from "react"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);


  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: 'short',
    day: 'numeric',
    month: 'long'
  })
 
  return (
    <div className="flex-col gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={ ( date ) => date.getDay() === 0 || date.getDay() === 6 }
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={ ( date ) => date > new Date() }
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />

      <div className="mt-8">
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b"></div>
        <p>{ smallDate }</p>
      </div>

    </div>
  )
}
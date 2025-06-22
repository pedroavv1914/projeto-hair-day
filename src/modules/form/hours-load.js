import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }){
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(':')

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    
  })
}
export default function getDayOfaWeek(datestring) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[new Date(datestring).getDay()]
}
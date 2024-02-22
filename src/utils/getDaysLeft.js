export default function getDaysLeft(seconds) {

  let days = Math.floor(seconds / (24 * 60 * 60));

  seconds = seconds - days * (24 * 60 * 60);

  let hours = Math.floor(seconds / (60 * 60));

  seconds = seconds - hours * (60 * 60);

  let minutes = Math.floor(seconds / 60);

  seconds = Math.round(seconds - minutes * 60);

  return ({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  })
}
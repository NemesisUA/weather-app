export default function isformValid(city, startDate, endDate) {
  if (city.trim() === "") {
    alert("City is required");
    return false;
  }
  if (startDate.trim() === "") {
    alert("Start date is required");
    return false;
  }
  if (endDate.trim() === "") {
    alert("End date is required");
    return false;
  }
  if (new Date(startDate).getTime() + 24 * 60 * 60 * 1000 < new Date().getTime()) {
    alert("Start Date must be at least today");
    return false;
  }
  if (new Date(endDate).getTime() < new Date(startDate).getTime()) {
    alert("End Date must be after Start Date");
    return false;
  }

  return true
}
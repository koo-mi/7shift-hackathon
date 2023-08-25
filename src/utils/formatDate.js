function formatDate(inputDate) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parts = inputDate.split(" ");
  const dayOfWeek = daysOfWeek[new Date(inputDate).getDay()];
  const month = months[new Date(inputDate).getMonth()];
  const day = parts[2];
  const year = parts[3];

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}


export default formatDate;

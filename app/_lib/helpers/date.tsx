export function getSeasonOfTheDate(date: Date) {
  const month = date.getMonth();

  //returns anime season
  // Winter: January to March
  // Spring: April to June
  // Summer: July to September
  // Fall: October to December

  switch (month) {
    case 0:
    case 1:
    case 2:
      return "WINTER";
    case 3:
    case 4:
    case 5:
      return "SPRING";
    case 6:
    case 7:
    case 8:
      return "SUMMER";
    case 9:
    case 10:
    case 11:
      return "FALL";
    default:
      return "WINTER";
  }
}

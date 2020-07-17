const today = new Date();
const currentHour = today.getHours();
function convertHourToStr(hour) {
  debugger;
  switch (hour) {
    case 1:
      return "Es la una";
    case 2:
      return "Son las dos";
    case 3:
      return "Son las tres";
    case 4:
      return "Son las cuatro";
    case 5:
      return "Son las cinco";
    case 6:
      return "Son las seis";
    case 7:
      return "Son las siete";
    case 8:
      return "Son las ocho";
    case 9:
      return "Son las nueve";
    case 10:
      return "Son las diez";
    case 11:
      return "Son las once";
    case 12:
      return "Son las doce";
  }
}
function wataim() {
  let hour = "";
  let message = "";
  if (currentHour > 6 || currentHour <= 12) {
    hour = convertHourToStr(currentHour);
    message = `${hour} de la Mañana`;
    return message;
  }
  if (currentHour > 12 || currentHour <= 13) {
    hour = convertHourToStr(currentHour);
    message = `${hour} de la Medio Dia`;
    return message;
  }
  if (currentHour > 13 || currentHour <= 19) {
    hour = convertHourToStr(currentHour);
    message = `${hour} de la Tarde`;
    return message;
  }
  if (currentHour > 19 || currentHour <= 24) {
    hour = convertHourToStr(currentHour);
    message = `${hour} de la Noche`;
    return message;
  }
  if (currentHour > 0 || currentHour <= 6) {
    hour = convertHourToStr(currentHour);
    message = `${hour} de la Madrugada`;
    return message;
  }
}
module.exports = { wataim };

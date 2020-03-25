
ValidateMobile = (mob) => {
  var regex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g
  return regex.test(mob);
}

ValidateUPIId = (id) => {
  var regex = /^\w+@\w+$/;
  return regex.test(id);
}

module.exports = { ValidateMobile, ValidateUPIId };
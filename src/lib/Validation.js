
ValidateMobile = (mob) => {
  var regx = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g
  return regx.test(mob);
}

module.exports = { ValidateMobile };
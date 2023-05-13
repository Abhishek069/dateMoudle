const firstName = require("../utilities/utils/index");
const peoples = require("../country/state/city/index");

const getPeopleInCity = (peoples) => {
  return firstName(peoples);
};

module.exports = getPeopleInCity;

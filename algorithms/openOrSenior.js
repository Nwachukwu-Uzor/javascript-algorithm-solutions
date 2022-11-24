/**
 * @return {string[]} list of string values stating whether the respective member is to be placed in the senior or open category.
 * @param {[number[]]} data will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.


 */
function openOrSenior(data) {
  return data.map((member) => {
    const [age, handicapp] = member;
    return age >= 55 && handicapp > 7 ? "Senior" : "Open";
  });
}

module.exports = openOrSenior;

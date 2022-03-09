/**
 * Using the countries array create the following array of arrays.
 * The country name, the first three letters of the country name and
 * the length of the country name.
 */

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

console.log(createArrayOfArrays(countries));

function createArrayOfArrays(arr) {
  return arr.map((elem) => [
    elem,
    Array.from(elem).splice(0, 3).join(""),
    elem.length,
  ]);
}

// ##############################################################################

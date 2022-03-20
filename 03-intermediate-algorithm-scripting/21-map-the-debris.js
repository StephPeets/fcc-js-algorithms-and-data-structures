/*

Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia. (https://en.wikipedia.org/wiki/Orbital_period#Small_body_orbiting_a_central_body)

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const findOrbitalPeriod = (item) =>
    Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(item.avgAlt + earthRadius, 3) / GM)
    );
  for (let item of arr) {
    item["orbitalPeriod"] = findOrbitalPeriod(item);
    delete item.avgAlt;
  }

  return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// s/b [{name: "sputnik", orbitalPeriod: 86400}]

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
// s/b [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

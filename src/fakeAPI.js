const people = [
  {
    name: "Rudolph",
    hasPets: false,
    currentTemp: 98.6,
  },
  {
    name: "Henry",
    hasPets: true,
    currentTemp: 68.6,
  },
];

export default function fakeAPICall(i) {
  return Promise.resolve(people[i]);
}

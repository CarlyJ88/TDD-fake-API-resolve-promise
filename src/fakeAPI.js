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
  {
    name: "Belinda",
    hasPets: true,
    currentTemp: 18.6,
  },
];

export default function fakeAPICall(i) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(people[i]);
    }, 1000)
  );
}

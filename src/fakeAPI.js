export default function fakeAPICall() {
  return Promise.resolve({
    name: "Rudolph",
    hasPets: false,
    currentTemp: 98.6,
  });
}

import fakeAPICall from "./fakeAPI";

export default function mockFetchData() {
  return Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]);
}

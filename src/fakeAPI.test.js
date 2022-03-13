import fakeAPICall from "./fakeAPI";

describe("test resolve", () => {
  it("test 1", async () => {
    await expect(fakeAPICall(0)).resolves.toEqual({
      name: "Rudolph",
      hasPets: false,
      currentTemp: 98.6,
    });
  });
  it("test 2", async () => {
    await expect(fakeAPICall(1)).resolves.toEqual({
      name: "Henry",
      hasPets: true,
      currentTemp: 68.6,
    });
  });
});

import fakeAPICall from "./fakeAPI";

describe("test resolve", () => {
  it("test 1", async () => {
    await expect(fakeAPICall(0)).resolves.toEqual({
      name: "Rudolph",
      hasPets: false,
      currentTemp: 98.6,
    });
  });
});

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
  it("test 3", async () => {
    await expect(fakeAPICall(2)).resolves.toEqual({
      name: "Belinda",
      hasPets: true,
      currentTemp: 18.6,
    });
  });
  it("it takes 1000ms to resolve", async () => {
    const start = new Date();
    await fakeAPICall(2);
    expect(new Date().getTime() - start.getTime()).toBeGreaterThan(1000);
  });
});

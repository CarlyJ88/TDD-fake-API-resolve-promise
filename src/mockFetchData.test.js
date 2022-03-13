import mockFetchData from "./mockFetchData";

jest.mock("./fakeAPI");
import fakeAPI from "./fakeAPI";

describe("fetch data", () => {
  const myFakeAPICallMock = fakeAPI;
  it("resolves all values", async () => {
    myFakeAPICallMock.mockResolvedValueOnce("first call");
    myFakeAPICallMock.mockResolvedValueOnce("second call");
    myFakeAPICallMock.mockResolvedValue("third call");
    await expect(mockFetchData()).resolves.toEqual([
      "first call",
      "second call",
      "third call",
    ]);
    expect(fakeAPI).toHaveBeenCalledWith(0);
    expect(fakeAPI).toHaveBeenCalledWith(1);
    expect(fakeAPI).toHaveBeenCalledWith(2);
  });
});

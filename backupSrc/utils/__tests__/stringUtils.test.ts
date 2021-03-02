import { formatDate, NOT_AVAILABLE } from "../stringUtils";

Date.now = jest.fn(() => 1611698967567); //2021-01-26T22:09:27.567Z

describe("FormatDate", () => {
  it("should return NA if date is empty/undefined", () => {
    expect(formatDate("")).toEqual(NOT_AVAILABLE);
    expect(formatDate(undefined)).toEqual(NOT_AVAILABLE);
  });
  it("should return HH a format", () => {
    expect(formatDate("2021-01-26T22:08:27.567Z")).toEqual("12:08 AM");
  });
  it("should return Day format", () => {
    expect(formatDate("2021-01-25T22:08:27.567Z")).toEqual("Tuesday");
  });
  it("should return dd MMMM yyyy format", () => {
    expect(formatDate("2021-01-19T22:08:27.567Z")).toEqual("20 January 2021");
  });
});

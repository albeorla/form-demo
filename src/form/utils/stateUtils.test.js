import {
  getAllTouched,
  getDefaultState,
  getDefaultTouched,
  hasErrors,
} from "./stateUtils";

describe("Form State Utils", () => {
  describe("getDefaultState", () => {
    it("should return an object with all fields empty", () => {
      const defaultState = getDefaultState();
      const expectedState = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        dob: "",
        ssn: "",
      };

      expect(defaultState).toEqual(expectedState);
    });
  });

  describe("getAllTouched", () => {
    it("should return an object with all fields set to true", () => {
      const allTouched = getAllTouched();
      const keys = Object.keys(getDefaultState());

      keys.forEach((key) => {
        expect(allTouched[key]).toBe(true);
      });
    });
  });

  describe("hasErrors", () => {
    it("should return true if any of the fields have errors", () => {
      const errors = { firstName: "Required", lastName: "" };
      expect(hasErrors(errors)).toBe(true);
    });

    it("should return false if none of the fields have errors", () => {
      const errors = { firstName: "", lastName: "" };
      expect(hasErrors(errors)).toBe(false);
    });
  });

  describe("getDefaultTouched", () => {
    it("should return an object with all fields set to false", () => {
      const defaultTouched = getDefaultTouched();
      const keys = Object.keys(getDefaultState());

      keys.forEach((key) => {
        expect(defaultTouched[key]).toBe(false);
      });
    });
  });
});

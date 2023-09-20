import { validationSchema } from "./validationSchema";

describe("validationSchema", () => {
  const validObject = {
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    address: "123 Street",
    city: "City",
    state: "State",
    zip: "12345",
    phone: "1234567890",
    dob: new Date(),
    ssn: "123-45-6789",
  };

  it("should validate firstName as required", async () => {
    await expect(
      validationSchema.isValid({
        firstName: "",
      })
    ).resolves.toBe(false);
  });

  it("should validate lastName as required", async () => {
    await expect(
      validationSchema.isValid({
        lastName: "",
      })
    ).resolves.toBe(false);
  });

  it("should require email", async () => {
    await expect(validationSchema.isValid({ email: "" })).resolves.toBe(false);
  });

  it("should invalidate incorrect email format", async () => {
    await expect(
      validationSchema.isValid({ email: "invalidEmail" })
    ).resolves.toBe(false);
  });

  it("should validate correct email format", async () => {
    await expect(validationSchema.isValid(validObject)).resolves.toBe(true);
  });

  it("should require ZIP code", async () => {
    await expect(
      validationSchema.isValid({
        zip: "",
      })
    ).resolves.toBe(false);
  });

  it("should invalidate incorrect ZIP code format", async () => {
    await expect(
      validationSchema.isValid({
        zip: "123",
      })
    ).resolves.toBe(false);
  });

  it("should validate correct ZIP code format", async () => {
    await expect(validationSchema.isValid(validObject)).resolves.toBe(true);
  });

  // Phone validation tests
  it("should require phone number", async () => {
    await expect(
      validationSchema.isValid({
        phone: "",
      })
    ).resolves.toBe(false);
  });

  it("should invalidate incorrect phone number format", async () => {
    await expect(
      validationSchema.isValid({
        phone: "123456789",
      })
    ).resolves.toBe(false);
  });

  it("should validate correct phone number format", async () => {
    await expect(validationSchema.isValid(validObject)).resolves.toBe(true);
  });

  // SSN validation tests
  it("should require Social Security Number", async () => {
    await expect(
      validationSchema.isValid({
        ssn: "",
      })
    ).resolves.toBe(false);
  });

  it("should invalidate incorrect Social Security Number format", async () => {
    await expect(
      validationSchema.isValid({
        ssn: "123-45-678",
      })
    ).resolves.toBe(false);
  });

  it("should validate correct Social Security Number format", async () => {
    await expect(validationSchema.isValid(validObject)).resolves.toBe(true);
  });
});

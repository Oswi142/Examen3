import restar from "./calculador";

describe("Restar", () => {
  it("deberia restar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
});

describe("Fraccionar", () => {
    it("deberia fraccionar un numero", () => {
      expect(fraccionar(19)).toEqual([5,5,5,2,2]);
    });
  });
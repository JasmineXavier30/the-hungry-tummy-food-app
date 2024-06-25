import { sum } from "./sum";

test("sum of 2 nums", () => {
    const r = sum(3,4);

    //Assertion
    expect(r).toBe(7)
})
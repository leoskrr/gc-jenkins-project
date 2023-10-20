import { sum, sub } from './operations';

describe("#sum", () => {
    it("should sum positive numbers properly", () => {
        expect(sum(1, 1)).toBe(2);
    });

    it("should sum negative numbers properly", () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    it("should sum a negative and a positive number properly", () => {
        expect(sum(-1, 2)).toBe(1);
    });
});

describe("#sub", () => {
    it("should subtract numbers properly", () => {
        expect(sub(2, 1)).toBe(1);
    });
});
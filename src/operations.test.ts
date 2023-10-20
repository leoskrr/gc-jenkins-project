import { sum, sub } from './operations';

describe("#sum", () => {
    it("should sum numbers properly", () => {
        expect(sum(1, 1)).toBe(2);
    });
});

describe("#sub", () => {
    it("should subtract numbers properly", () => {
        expect(sub(2, 1)).toBe(1);
    });
});
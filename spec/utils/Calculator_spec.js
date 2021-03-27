const { add, sub, mult, mod, div } = require("../../server/utils/Calculator")

describe("Calculator", function() {
    it("should add the two numbers", function() {
        let res = add(1, 2)
        expect(res).toEqual(3)
    });

    it("should return 0", function() {
        let res = add(0, 0)
        expect(res).toEqual(0)
    });

    it("should subtract the two numbers", function() {
        let res = sub(2, 1)
        expect(res).toEqual(1)
    });

    it("should multiply the two numbers", function() {
        let res = mult(5, 2)
        expect(res).toEqual(10)
    });

    it("should divide the two numbers", function() {
        let res = div(4, 2)
        expect(res).toEqual(2)
    });

    it("should calculate the modulus", function() {
        let res = mod(4, 2)
        expect(res).toEqual(0)
    });

});

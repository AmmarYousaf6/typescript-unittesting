import { getStringInfo, toUpperCase } from "../app/utils";

const actual = getStringInfo("My-string");

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });
});

describe("getStringInfo should", () => {
  test("return lowercase", () => {
    expect(actual.lowerCase).toBe("my-string");
  });
  test("return character length", () => {
    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);
    expect(actual.extraInfo).toEqual({});
  });
  test("return character to equal", () => {
    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "s",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
  });
  test("return character to contain", () => {
    expect(actual.characters).toContain<string>("M");
    expect.arrayContaining(["s", "t", "r", "i", "n", "g", "M", "y", "-"]);
  });
  test("return defined", () => {
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});

//paramterized testing
describe.only('ToUpperCase example', ()=>{
    it.each([
        {
            input:'abc', expected: 'ABC'
        },{
            input:'def', expected: 'DEF',
        }
    ])('$input toUpperCase should be $expected', ({input, expected})=>{
        const actual = toUpperCase(input);
        expect(actual).toBe(expected);
    });
})

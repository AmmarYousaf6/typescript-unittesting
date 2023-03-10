import { getStringInfo, toUpperCase, StringUtils } from "../app/utils";

const actual = getStringInfo("My-string");


describe('Utils test suite', () => {
    //describle.only > will only run this describe , describe.skip will skip it, describe.concurrent, describe.todo
    // describe.only || describe.skip('StringUtils tests', ()=>{
    //xit is an alias for it.skip, fit is an alias for it.only
    describe('StringUtils tests', ()=>{
        let sut:StringUtils;
        beforeEach(()=>{
            sut = new StringUtils();
        });
        afterEach(()=>{
            console.log('Teardown');
        });

        it('should return correct uppercase', ()=>{
            const actual__ = sut.toUpperCase('abc');
            expect(actual__).toBe('ABC');
        });

        it('should throw an error', ()=>{
            function expectError(){
                const actual = sut.toUpperCase('');
            }
            expect(expectError).toThrow();
            expect(expectError).toThrowError("Invalid Arguement");
        });

        it('should throw an error - arrow function', ()=>{
            expect(()=>{
                sut.toUpperCase('');
            }).toThrowError("Invalid Arguement");
        });
        it('should throw an error - try catch block', ()=>{
            try {
                sut.toUpperCase('');
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid Arguement');
            }
        });

    });
});


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
describe('ToUpperCase example', ()=>{
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

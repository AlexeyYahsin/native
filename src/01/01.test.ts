import {mult, splitMessage, sum} from "./01";

test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    const result1 = sum(a, b)
    const result2 = sum(c, b)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiply should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    const result1 = mult(a, b)
    const result2 = mult(c, b)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('the sentence should break into an array of words', () => {
    let sentence = 'Hello world, i want lern js'

    const result = splitMessage(sentence)

    expect(result[0]).toBe('Hello')
    expect(result[1]).toBe('world,')
    expect(result[result.length - 1]).toBe('js')
} )
/**
 * 4-setup-globals.js 에서 작성한 전역 헬퍼함수들로 구동되도록 해보자
 * node --require ./4-setup-globals.js 4.js
 */

const sum = (a, b) => a + b;
const subtract = (a,b) => a - b;

const delay = (ms) => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const delayIdentity = async (ms, value) => {
    await delay(ms);
    return value;
};

test('sum adds numbers', () => {
    expect(sum(3, 6)).toBe(9);
})

test('subtract numbers', () => {
    expect(subtract(3, 6)).toBe(-3);
})

test('async', async () => {
    expect(await delayIdentity(10, 3)).toBe(3);
});

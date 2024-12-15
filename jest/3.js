/**
 * 앞서 작성했던 테스트 프레임 워크는 동기식 테스트에서 잘 작동합니다.
 * 테스트 하고 싶은 함수가 비동기 함수라면 어떨까요 ?
 * 비동기 함수를 지원하도록 개선해 봅시다.
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

async function test(title, callback) {
    try {
        await callback();
        console.log(`✅ ${title}`);
    } catch (error) {
        console.error(`❌ ${title}`);
        console.error(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

test('sum adds numbers', () => {
    expect(sum(3, 6)).toBe(10);
})

test('subtract numbers', () => {
    expect(subtract(3, 6)).toBe(-2);
})

test('async', async () => {
    expect(await delayIdentity(10, 3)).toBe(2);
});

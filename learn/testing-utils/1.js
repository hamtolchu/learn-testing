/**
 * 테스트를 더 쉽게 작성할 수 있도록 간단한 추상화 계층을 추가해 보자.
 */

const sum = (a, b) => a + b;

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

expect(sum(3, 6)).toBe(10);

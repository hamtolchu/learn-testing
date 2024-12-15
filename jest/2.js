/**
 * 앞서 작성했던 `expect` 함수를 이용할 경우 테스트 중 하나라도 실패되는 경우
 * 여러 테스트가 있을때, 오류 이후의 테스트는 실행되지 않게된다.
 *
 * 개발자가 모든 테스트의 결과를 볼 수 있다면 문제가 무엇인지 파악하는데 큰 도움이 될 수 있다.
 * 자동화 테스트를 캡슐화 하여 파일의 다른 테스트와 분리하고,
 * 파일에 있는 모든 테스트를 보다 유용한 오류 메시지와 함께 실행할 수 있도록
 * 자체 테스트 함수를 작성해보자.
 */

const sum = (a, b) => a + b;
const subtract = (a,b) => a - b;


function test(title, callback) {
    try {
        callback();
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

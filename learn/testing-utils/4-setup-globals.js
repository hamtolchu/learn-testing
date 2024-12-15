/**
 * 앞서 작성했던 테스트 유틸리티 함수들은 유용합니다.
 * 모든 테스트 파일에서 애플리케이션 전체에 걸쳐 사용할때는, 매번 유틸리티를 불러와야하는 불편함이 있습니다.
 *
 * 일부 테스트 프레임워크는 전역 변수로 헬퍼를 제공합니다.
 * 테스트 프레임워크와 어설션 라이브러리를 더 쉽게 사용할 수 있도록 이 기능을 구현해 보자.
 * node --require $1 $2
 * - $1 현재 파일 (4-setup-globals.js) : 전역 헬퍼
 * - $2 대상 파일
 */

// STUDY: node 의 --require 옵션
/* STUDY: 브라우저 환경에서 global 이 있었나 ? (X)
    테스트 실행, 시각화를 위해 브라우저 환경에서 실행해야하는 경우 어떻게 해야할까
 */

async function test(title, callback) {
    try {
        await callback();
        console.log(`✅\s\s${title}`);
    } catch (error) {
        console.error(`❌\s\s${title}`);
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

global.test = test;
global.expect = expect;

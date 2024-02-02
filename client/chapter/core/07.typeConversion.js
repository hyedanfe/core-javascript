/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(String(YEAR)); //명시적
console.log(YEAR + ''); //암시적
console.log(YEAR + ' '.trim()); //암시적, 공백제거

// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');

// boolean

let isClicked = false;

console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));

// null

let money = null;
console.log(Number(money));

// boolean

let cutie = true;
console.log(Number(cutie));

// string

let num = '250';
console.log(Number(num)); //명시적
console.log(num * 1); //암시적

// numeric string

const width = '105.3px';
console.log(Number(width));
console.log(parseInt(width)); //숫자만 남기고 정수로 변환
console.log(parseFloat(width)); //소수점 포함한 숫자를 내보냄

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(' '));
console.log(Boolean('0'));

// 위에 나열한 것 이외의 것들

const value = prompt('값을 입력해주세요');
const numberValue = +value;

console.log(numberValue + 50);

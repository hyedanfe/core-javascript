/* ------------------- */
/* Logical Operators   */
/* ------------------- */
/*
let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// logical or assignment  논리합 할당 연산자

// a = a || b;

a ||= b;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
/*두번째는 공백문자라 true, 세번째는 배열인데 비어있어도 생성이 되는 순간 값이 있다고 판단돼 true가 된다. 객체{}도 마찬가지다. 따라서 마지막 연산자가 반환된다. {} 안의 내용은 false든 뭐든 상관없이 {}만 생성되는 순간 무조건 true*/

// 첫번째 Truthy를 찾는 연산 (||)
//let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let userName = prompt('아이디를 입력해 주세요');

//상황
//1. 사용자가 취고 버튼 눈르면 null
//2. 사용자가 ESC 누리면 null
//3. 아무것도 입력하지 않으면 ''
//4. 띄어쓰기를 입력하면 ' '

if (userName.toLowerCase() === 'admin') {
  let password = prompt('비밀번호를 입력해주세요.');

  if (!userName) return; //함수는 return 문을 만나면 해당 코드의 실행을 종료

  if (password.toLowerCase() === 'themaster') {
    console.log('로그인 성공! 환영합니다~!');
  } else {
    console.log('비밀번호를 잘못 입력하셨습니다.');
  }
} else if (userName == null || userName.replace(/\s*/g, '') === '') {
  console.log('취소했습니다.');
} else {
  console.log('올바른 사용자가 아닙니다.');
}
//동등연산자 사용도 가능하지만 보다 안전한 비교를 위해 일치 연산자를 사용해주면 좋다.

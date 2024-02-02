// function rem(a, b = 16) {
//   //a를 숫자로 만든다
//   let A = parseInt(a);
//   let B = parseInt(b);
//   let result = A / B + 'rem';
//   return result;
// }
// console.log(rem('20px', '10px'));

// let rem = function (a, b = 16) {
//   let A = parseInt(a);
//   let B = parseInt(b);
//   let result = A / B + 'rem';
//   return result;
// };
// console.log(rem('20px', '10px'));

// let rem = (a, b = 16) => {
//   let A = parseInt(a);
//   let B = parseInt(b);
//   let result = A / B + 'rem';
//   return result;
// };

// console.log(rem('20px', '10px'));

// let value = '';
// do {
//   value = prompt('안녕하세요~!');
// } while (value !== '안녕하세요');
// {
//   prompt('안녕하세요~!');
// }

//처음 숫자에서 1씩 커지는 숫자 5자리가 일렬로 나열
//처음 숫자는 반복때마다 1씩 커지고 이걸 5번 시행
// let value = '';
// for (let i = 0; i < 5; i++) {
//   //i
//   for (let j = 5 - i; j < 10 - i; j++) {
//     value += j;
//   }
//   value += '\n';
// }
// console.log(value);

//2단
// for (let i = 1; i < 10; i++) {
//     for(let j = ){}
//   console.log(2 + '*' + i + '=' + 2 * i);
// }
// function solution(arr, n) {
//   var answer = [];
//   if(arr.length % 2 === 0){
//       return arr.map(){
//         if(i % 2 === 0){
//             arr[i] + n
//       }
//     }

var age = 1;
console.log(age);

const animal = {
  name: 'tiger',
  age: 5,
  showAge: function () {
    console.log(`${this.name} is ${this.age} years old`);

    function plusAge() {
      this.age++;
      console.log(`in this func, ${this.name} is ${this.age} years old`);
      return age;
      console.log(window.age);
    }
    plusAge();
  },
};

animal.showAge();

/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No
/*
function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('영화 봤니?');

  // 영화 볼거니?

  if (!didWatchMovie) {
    let goingToWatchMovie = confirm('영화 볼거야?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼거니?');

      if (withWho === '너') {
        console.log('어머..☺️');
      } else if (withWho === '엄마') {
        console.log('효자구나!');
      } else {
        console.log('내가 아니네..?🤔');
      }
    } else {
      console.log('꼭 봐 재밌어');
    }
  } else {
    console.log('어 나 봤어..');
  }
}

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

let message = didWatchMovie.includes('yes')
  ? '그거 재밌더라'
  : goingToWatchMovie('yes')
    ? '재밌겠다'
    : '난 그거 별론데';

// 멀티 조건부 연산자 식
*/

var value = 1;

let obj = {
  value: 5,
  func1() {
    console.log(this); // {num: 5, func1: f}
    console.log(this.value); // 5

    let func2 = function () {
      console.log(this); // window
      console.log(this.value); // 1
    };

    func2();
  },
};

obj.func1();

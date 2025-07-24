console.log("Hello, World!");

let count = 1;
const name = "B0X";

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

function greet(name) {
    return "안녕하세요, " + name + "~~!";
}

console.log(greet("B0X"));

const add = function(x, y) {
    return x + y;
};

console.log(add(5, 3));

const multiply = (x, y) => x * y;

console.log(multiply(4, 6));

// const greet = (name) => {
//     return `Hello, ${name}`;
// };

const age = 20;
if (age >= 20) {
    console.log("성인입니다");
} else {
    console.log("미성년자입니다");
}

let score = 75;

if (score >= 90) {
    console.log("A 학점");
} else if (score >= 80) {
    console.log("B 학점");
} else if (score >= 70) {
    console.log("C 학점");
} else {
    console.log("F 학점");
}

let day = 2;
let dayName;

switch (day) {
    case 1:
        dayName = "월요일";
        break;
    case 2:
        dayName = "화요일";
        break;
    case 3:
        dayName = "수요일";
        break;
    default:
        dayName = "알 수 없음";
}

console.log(dayName);

const status = age >= 20 ? "성인" : "미성년자";

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }

// nums.forEach((num) => {
//     console.log(num);
// });

//const squared = nums.map((n) => n * n);

const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, "hello", true, {name: "world"}];

nums = Array(20).fill().map((_, i) => i) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

console.log(nums)

var nums2 = nums.slice(5, 10)

console.log(nums2)

nums.splice(5, 3)

console.log(nums)

const arr = [1, 2, 3, 4, 5];

// 2번 인덱스부터 1개의 요소를 삭제하고, 10과 20을 추가
const removed = arr.splice(2, 1, 10, 20);

console.log(arr);
console.log(removed);

// 1번 인덱스부터 2개의 요소를 삭제
const removed2 = arr.splice(1, 2);

console.log(arr);
console.log(removed2);

// 3번 인덱스부터 아무 요소도 삭제하지 않고 30 추가
const removed3 = arr.splice(3, 0, 30);

console.log(arr);
console.log(removed3);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const twoConcatarray = array1.concat(array2);

console.log(twoConcatarray); // [1, 2, 3, 4, 5, 6]

const array3 = [6, 7, 8];

const threeConcatarray = array1.concat(array2, array3);

console.log(threeConcatarray); // [1, 2, 3, 4, 5, 6, 6, 7, 8]

const fruits = ["멜론", "배", "참외"];

console.log(fruits.join());
// 멜론,배,참외

console.log(fruits.join(""));
//멜론배참외

console.log(fruits.join(" "));
// 멜론 배 참외

const colors = ["red", "green", "blue"];

const red = colors.indexOf("red");
console.log(red); // 0


const arr4 = [1, 2, 3, 4, 5];

console.log(arr4.includes(3)); // true
console.log(arr4.includes(6)); // false

const green = colors.find(function(color) {
    return color === "green"; // 배열 요소가 "green"과 같은지 확인
});

console.log(green); // green

const blue = colors.findIndex(function(color) {
    return color === "blue";
});

console.log(blue) // 2

const enStrings = ["d", "b", "c", "a"];
enStrings.sort();

console.log(enStrings); // ["a", "b", "c", "d"]

// 한글
const koStrings = ["다", "가", "나"];
koStrings.sort();

console.log(koStrings); // ["가", "나", "다"]

// 오름차순
const numbers2 = [1, 4, 10, 31, 1000];
numbers2.sort();

console.log(numbers2); // [1, 10, 1000, 31, 4] <= 문자열처럼 취급하여 오름차순 정렬함
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [ 1, 4, 10, 31, 1000 ]

// 내림차순
const reverseNumbers = [1, 3, 2, 4, 5];
reverseNumbers.sort((a, b) => b - a);

console.log(reverseNumbers); // [5, 4, 3, 2, 1]

const reversedArr = enStrings.reverse();
console.log(reversedArr); // [ 'd', 'c', 'b', 'a' ]

const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(value) {
    return value % 2 === 0;
}

const result = num3.filter(isEven);
console.log(result); // [2, 4, 6, 8, 10]

// 객체 리터럴을 사용한 객체 생성
const person = {
    name: "B0X",
    age: 94,
    greet: function() {
        console.log("안녕하세요, 제 이름은 " + this.name + "입니다.");
    }
};

// 생성자 함수를 사용한 객체 생성
function Car(make, model) {
    this.make = make;
    this.model = model;
}
const myCar = new Car("LandRova", "Defender");

// 프로퍼티 접근
console.log(person.name); // B0X
console.log(person["age"]); // 32
person.greet(); // 안녕하세요, 제 이름은 B0X입니다.

// 프로퍼티 존재 여부 확인
console.log("city" in person); // false
console.log(person.city === undefined); // true

// 프로퍼티 추가
person.city = "Seoul";
console.log(person.city); // Seoul

// 프로퍼티 삭제
delete person.age;
console.log(person.age); // undefined
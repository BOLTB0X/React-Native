# JavaScript 필수 개념

![으어어어어ㅓ어](https://m1.daumcdn.net/cfile263/image/2123993B5736BEBF05224C)

---

## 1. 변수 선언 (`let` , `const` , `var`)

> 변수는 `var` , `let` , `const` 키워드 사용

- Js 는 기본적으로 동적 타입 언어, `const` , `let` 으로 block 스코프를 제어 가능

    ```js
    let count = 1;
    const name = "B0X";
    ```

    ---

- `var` 는 주로 함수 스코프 (사용 지양)

---

## 2. Data Type

> JS는 기본적으로 동적 타입, **자동 추론**

### 2.1 Primitive Types (원시 타입)

- `Number` : 정수 및 부동 소수점 숫자

   - *ex* : `508` , `6.16`

   ---

- `String` : Text 데이터, **작은 따옴표(`'`)** , **큰 따옴표(`"`)** , 또는 **백틱(`)** 으로 감싸서 표현

   - *ex* : "hello"

   ---

- `Boolean` : true 또는 false

    ---

- `null` : **값이 없음** 을 나타내는 특수한 값

    ---

- `undefined` : 변수가 선언되었지만 값이 할당되지 않았을 때의 값

    ---

- `BigInt` : 길이 제한 없이 정수를 표현, 최대치인 `2^53 - 1` 보다 큰 정수를 표현할 수 있는 내장 객체
    
    ```js
    const alsoHuge = BigInt(9007199254740991);
    // ↪ 9007199254740991n

    const hugeString = BigInt("9007199254740991");
    // ↪ 9007199254740991n

    const hugeHex = BigInt("0x1fffffffffffff");
    // ↪ 9007199254740991n
    ```
    ---

- `Symbol` : **primitive type** 으로 ES6에서 추가되었, 고유하고 변경 불가능한 원시 값

    ---

### 2.2 Object Types (객체 타입)

- `Object` : 키-값 쌍으로 데이터를 저장하는 자료구조

    - *ex* : `{name: B0X"}`

    ---

- `Array` : 순서가 있는 값들의 컬렉션을 담는 자료구조

   - *ex* : `[1, 2, 3]`

   ---

- `Function` : 특정 작업을 수행하는 코드 블록

    ---

- `Date` : 날짜와 시간을 나타내는 객체

    ---

## 3. 함수 선언

> 가장 일반적인 방법은 **함수 선언문(function declaration)** 과 **함수 표현식(function expression)** 을 사용하는 것

### 3.1 함수 선언문(function declaration)

1. **정의**

    ```js
    function 함수이름(매개변수1, 매개변수2, ...) {
        // 함수 내용
        return 반환값;
    }
    ```

    ---

2. *ex*

    ```js
    function greet(name) {
        return "안녕하세요, " + name + "~~!";
    }

    console.log(greet("B0X")); 
    ```
---

### 3.2 함수 표현식 (Function Expression)

1. **정의**

    ```js
    const 함수변수이름 = function(매개변수1, 매개변수2, ...) {
        // 함수 내용
        return 반환값;
    };
    ```

    ---

2. *ex*

    ```js
    const add = function(x, y) {
        return x + y;
    };

    console.log(add(5, 3));
    ```

---

### 3.3  화살표 함수 (Arrow Function)

1. **정의**

    ```js
    const 함수변수이름 = (매개변수1, 매개변수2, ...) => {
        // 함수 내용
        return 반환값;
    };
    ```

    ---

2. *ex*

    ```js
    const greet = (name) => {
        return `Hello, ${name}`;
    };
    ```

    ```js
    const multiply = (x, y) => x * y;

    console.log(multiply(4, 6));
    ```
---

## 4. 제어문 (조건)

### 4.1 `if` - `else`

```js
const age = 20;
if (age >= 20) {
    console.log("성인입니다");
} else {
    console.log("미성년자입니다");
}
```

---

### 4.2 `if` - `else if` - `else`

```js
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
```

---

### 4.3 `switch`

```js
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
```

---

### 4.4 삼항연산자

```js
const status = age >= 20 ? "성인" : "미성년자";
```

---

## 5. 제어문 (반복)

### 5.1 `for`

1. **정의**

    ```js
    for (초기화; 조건; 증감식) {
        // 반복할 코드
    }
    ```

    ---

2. *ex*

    ```js
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    ```

---

### 5.2 `while`

1. **정의**

    *조건* : *반복문이 계속 실행될지 여부를 결정하는 조건식*

    ```js
    while (조건) {
         // 반복할 코드
    }
    ```

    ---

2. *ex*

    ```js
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
    ```

    ---

### 5.3 `do` - `while`

```js
do {
    // 반복할 코드
} while (조건);
```

- while문과 유사하지만 차이점이 존재

- 먼저 코드 블록을 실행한 후 조건을 확인

- 즉, 조건과 상관없이 코드 블록을 최소 한 번은 실행

---

## 6. Array (배열)

> 순서가 있는 데이터 집합

1. **배열 리터럴** : `[]` 안에 요소를 `,`로 구분하여 작성

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const mixedArray = [1, "hello", true, {name: "world"}];
    ```

    ---

2. **생성자 함수**

    ```js
    const numbers2 = new Array(1, 2, 3, 4, 5);
    ```

---

## 7. 배열과 반복문

- `for`

    ```js
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
    ```

    ---

- `forEach`

    ```js
    nums.forEach((num) => {
        console.log(num);
    });
    ```

    ---

- `map`

    ```js
    const squared = nums.map((n) => n * n);
    ```

---

## 8. 배열 관련 메서드

- `push()` : 배열 끝에 요소 추가

    ```js
    numbers.push(60);
    ```
    ---

- `pop()` : 배열 끝 요소 제거, 길이가 줄어듬

    ```jS
    var value = numbers.pop();
    ```

    ---

-  `delete` : 특정 요소 삭제, 길이 변화 X, 삭제된 요소는 ` undefined` 처리

    ```js
    delete numbers[2];
    ```

    ---

- `shift()` : 배열 앞 요소 제거, 길이가 줄어듬

    ```jS
    var value = numbers.shift();
    ```

    ---

- `unshift()` : 배열 앞에 요소 추가

    ```js
    mixedArray.unshift("A");
    ```

    ---
    
- `slice()` : 배열의 일부분을 추출하여 새로운 배열 생성

    ```js
    var nums2 = nums.slice(5, 10)
    ```

    ---

- `splice()` : 배열의 요소를 추가, 제거 또는 교체

    ```js
    array.splice(start, deleteCount, item1, item2, /* ..., */ itemN)
    ```

    - `start` : 변경을 시작할 배열의 인덱스 , 배열의 길이를 초과하는 값은 배열의 길이로 처리
    
    - `deleteCount` : 삭제할 요소의 개수 , `0` 으로 설정하면 아무 요소도 삭제 X

    - `item1, item2, ...` : 배열에 추가할 요소들 , 아무 값도 지정하지 않으면, `splice()`는 단순히 요소를 제거함

    ```js
    const arr = [1, 2, 3, 4, 5];

    // 2번 인덱스부터 1개의 요소를 삭제하고, 10과 20을 추가
    const removed = arr.splice(2, 1, 10, 20);

    // ...

    // 1번 인덱스부터 2개의 요소를 삭제
    const removed2 = arr.splice(1, 2);

    // ...

    // 3번 인덱스부터 아무 요소도 삭제하지 않고 30 추가
    const removed3 = arr.splice(3, 0, 30);

    // ...
    ```

    ---

- `concat()` : 두 개 이상의 배열을 합쳐 새로운 배열 생성

   ```js
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];

   const twoConcatarray = array1.concat(array2);

   console.log(twoConcatarray); // [1, 2, 3, 4, 5, 6]

   const array3 = [6, 7, 8];

   const threeConcatarray = array1.concat(array2, array3);

   console.log(threeConcatarray); // [1, 2, 3, 4, 5, 6, 6, 7, 8]
   ```

   ---

- `join()` : 배열 요소를 문자열로 변환

    ```js
    const fruits = ["멜론", "배", "참외"];

    console.log(fruits.join());
    // 멜론,배,참외

    console.log(fruits.join(""));
    //멜론배참외

    console.log(fruits.join(" "));
    // 멜론 배 참외
    ```

    ---

- `filter()` : 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 메서드

    ```js
    const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function isEven(value) {
        return value % 2 === 0;
    }

    const result = num3.filter(isEven);
    console.log(result); // [2, 4, 6, 8, 10]
    ```

    ---

- `indexOf()` : 특정 요소의 인덱스를 찾음

    ```js
    const colors = ["red", "green", "blue"];

    const red = colors.indexOf("red");
    console.log(red); // 0
    ```

    ---

- `includes()` : 특정 요소가 배열에 포함되어 있는지 확인

    ```js
    const arr4 = [1, 2, 3, 4, 5];

    console.log(arr4.includes(3)); // true
    console.log(arr4.includes(6)); // false
    ```

    ---

- `find()` : 배열에서 특정 조건을 만족하는 요소를 찾아 첫 번째 요소를 반환하는 메서드, 없을 경우 -> `undefined`

    ```js
    const green = colors.find(function(color) {
    return color === "green"; // 배열 요소가 "green"과 같은지 확인
    });

    console.log(green); // green
    ```

    ---

- `findIndex()` : 배열에서 특정 조건을 만족하는 요소를 찾아 첫 번째 요소의 인덱스를 반환하는 메서드

    ```js
    const blue = colors.findIndex(function(color) {
        return color === "blue";
    });

    console.log(blue) // 2
    ```

    ---

- `sort()` : 배열 요소를 원하는 정렬 순서로 변경하는 메서드

    ```js
    const enStrings = ["d", "b", "c", "a"];
    enStrings.sort();

    console.log(enStrings);
    // ["a", "b", "c", "d"]

    // 한글
    const koStrings = ["다", "가", "나"];
    koStrings.sort();

    console.log(koStrings);
    // ["가", "나", "다"]

    // 오름차순
    const numbers2 = [1, 4, 10, 31, 1000];
    numbers2.sort();

    console.log(numbers2);
    // [1, 10, 1000, 31, 4] <= 문자열처럼 취급하여 오름차순 정렬함

    numbers2.sort((a, b) => a - b);
    console.log(numbers2); // [ 1, 4, 10, 31, 1000 ]

    // 내림차순
    const reverseNumbers = [1, 3, 2, 4, 5];
    reverseNumbers.sort((a, b) => b - a);

    console.log(reverseNumbers); 
    // [5, 4, 3, 2, 1]
    ```

    ---

- `reverse()` : 배열의 요소 순서를 역순으로 정렬하는 메서드

    ```js
    const reversedArr = enStrings.reverse();
    console.log(reversedArr);
    // [ 'd', 'c', 'b', 'a' ]
    ```

---

## 9. Object

> Dart의 `Map<String, dynamic>`, Swift의 Dictionary 와 매우 유사

> 키-값 쌍으로 이루어진 프로퍼티들의 집합

1. **객체 생성**

    - **객체 리터럴** : 중괄호 `{}`를 사용하여 객체를 생성, `{}` 안에 프로퍼티를 `,` 로 구분하여 나열

    - **생성자 함수** : `new` 연산자와 함께 Object 생성자 함수를 호출하여 객체를 생성

    ---

2. **프로퍼티 접근**

    - **점 표기법(dot notation)** : *객체.프로퍼티이름* 형식으로 접근

    - **대괄호 표기법(square bracket notation)** : 객체["프로퍼티이름"] 형식으로 접근, 대괄호 표기법은 프로퍼티 이름이 유효한 변수 식별자가 아닌 경우에도 사용 가능

    ---

3. **프로퍼티 존재 여부 확인**

    - js에서는 존재하지 않는 프로퍼티에 접근해도 에러가 발생하지 않고 `undefined` 를 반환

    - `undefined`와 비교하거나 `in` 연산자를 사용하여 프로퍼티 존재 여부를 확인 가능

    ---

4. *ex*

    ```js
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
    ```

---

## 10. async / await

> 비동기 코드를 동기 코드처럼 작성하여 가독성을 높이고 에러 처리를 간편하게 해주는 문법

1. `async` 함수:

    - `async` 키워드는 함수 선언 앞에 위치하여 해당 함수가 **비동기 함수임** 을 나타냄

    - `async` 함수는 항상 **프로미스** 를 반환
    
        - 만약 `async` 함수에서 값을 반환하면, 해당 값은 이행된 **프로미스(resolved promise)** 의 결과로 감싸져 반환 됌

    - `async` 함수 내부에서 `await` 키워드를 사용 가능

    ---

2. `await` 키워드

    - `await` 키워드는 `async` 함수 내에서만 유효하며, 프로미스 객체의 앞에 위치

    - `await` 는 **프로미스** 가 이행될 때까지 (즉, 해결되거나 거부될 때까지) 대기

        - 만약 **프로미스** 가 이행되면, `await`는 프로미스의 결과 값을 반환

        - 만약 **프로미스** 가 거부되면, `await` 는 에러를 발생시킴 ,  이 에러는 `try...catch` 문을 사용하여 처리 가능

    ---

3. *ex*

    ```js
    async function fetchData() {
    try {
        const response = await fetch('https://example.com/data'); // 비동기 요청
        const data = await response.json(); // JSON 파싱
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }

    fetchData();
    ```

---

## 참고

- [MDN - Javascript](https://developer.mozilla.org/ko/docs/Web/JavaScript)


- [티스토리 참고 - 반복문-for, while, break, continue(Bill Gray)](https://floz.tistory.com/entry/5-Javascript-%EB%B0%98%EB%B3%B5%EB%AC%B8-for-while-break-continue)

- [freeCodeCamp - 자바스크립트에서 `.splice()` 배열 메서드 사용하기](https://www.freecodecamp.org/korean/news/javascript-splice-method/)

- [티스토라 참고 -  배열함수 Array function(whoAml_)](https://renee.tistory.com/29)

- [티스토리 참고 - Array 메소드 정리(Inpa Dev)](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Array-%EB%A9%94%EC%86%8C%EB%93%9C-%E2%9C%8F%EF%B8%8F-%EC%A0%95%EB%A6%AC)

- [velog 참고 - 배열 관련 함수 정리](https://velog.io/@natural_min/JS-array-fn#:~:text=%EC%88%9C%EC%84%9C%EA%B0%80%20%EC%9E%88%EB%8A%94%20%EB%A6%AC%EC%8A%A4%ED%8A%B8%2C%20%EA%B3%A0%EC%9C%A0%EB%B2%88%ED%98%B8(index)%20%EC%A1%B4%EC%9E%AC:%20%EB%B0%B0%EC%97%B4%20%EB%81%9D%EC%97%90,%EA%B0%80%EB%8A%A5%EC%9D%BC%EB%B0%98%20for%EB%AC%B8%EB%B3%B4%EB%8B%A4%EB%8A%94%20%EA%B0%84%EB%8B%A8%ED%95%98%EC%A7%80%EB%A7%8C%2C%20index%EB%A5%BC%20%EC%96%BB%EC%9D%84%20%EC%88%98%20%EC%97%86%EC%9D%8C.arr.splice)

- [티스토리 참고 - JavaScript - 배열 splice() 사용법 및 예제(도쿄에서 개발하기)](https://tocomo.tistory.com/31#:~:text=%EA%B5%AC%EB%AC%B8%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98%20splice%20%ED%95%A8%EC%88%98%EB%8A%94%20%EC%9B%90%EB%B3%B8%20%EB%B0%B0%EC%97%B4%EC%97%90%20%EC%83%88%EB%A1%9C%EC%9A%B4,%EC%A0%9C%EA%B1%B0%EB%90%9C%20%EB%B0%B0%EC%97%B4%EC%9D%84%20%EB%B0%98%ED%99%98%ED%95%A9%EB%8B%88%EB%8B%A4.%20array.splice(start%5B%2C%20deleteCount%5B%2C%20item1%5B%2C%20item2%5B%2C&text=%5D%5D%5D%5D)%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%20start%20%EB%B0%B0%EC%97%B4%EC%9D%98%20%EB%B3%80%EA%B2%BD%EC%9D%84%20%EC%8B%9C%EC%9E%91%ED%95%A0%20index,%EA%B8%B8%EC%9D%B4%EB%B3%B4%EB%8B%A4%20%ED%81%B0%20%EA%B0%92%EC%9D%BC%20%EA%B2%BD%EC%9A%B0%20%EB%B0%B0%EC%97%B4%EC%9D%98%20%EA%B8%B8%EC%9D%B4%EB%A1%9C%20%EC%84%A4%EC%A0%95)

- [블로그 참고 - Javascript Data Type(메이커준의 블로그)](https://blog.makerjun.com/ff5b1730-d600-4416-b6fa-a52ee47f87c2)

- [티스토리 참고  - 제어문(갓대희's 작은 공간)](https://goddaehee.tistory.com/225)

- [티스토리 참고 - 조건문 완전정복(YJ Dev코딩 초보를 위한 학습 블로그)](https://creativevista.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%99%84%EC%A0%84-%EC%A0%95%EB%B3%B5-%EA%B8%B0%EC%B4%88%EB%B6%80%ED%84%B0-%EC%8B%A4%EC%A0%84%EA%B9%8C%EC%A7%80-%ED%95%9C-%EB%B2%88%EC%97%90-%EB%B0%B0%EC%9A%B0%EA%B8%B0#:~:text=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EC%A1%B0%EA%B1%B4%EB%AC%B8%EC%9D%80%20%EB%A1%9C%EC%A7%81%EC%9D%84%20%EC%A0%9C%EC%96%B4%ED%95%98%EB%8A%94%20%EB%8D%B0%20%ED%95%84%EC%88%98%EC%A0%81%EC%9D%B8%20%EC%97%AD%ED%95%A0%EC%9D%84,%EB%AC%B8%20%EC%82%BC%ED%95%AD%20%EC%97%B0%EC%82%B0%EC%9E%90%20%EC%8B%A4%EC%8A%B5%20%EB%AC%B8%EC%A0%9C%F0%9F%9B%A0%EF%B8%8F%EA%B3%A0%EA%B8%89%20%EC%A1%B0%EA%B1%B4%EB%AC%B8%20%EC%82%AC%EC%9A%A9%EB%B2%95)

- [티스토리 참고 -자바스크립트의 배열(oneul-losnue)](https://oneul-losnue.tistory.com/67)

- [javascript.info 참고  - 객체](https://ko.javascript.info/object)

- [티스토리 참고 - sync와 await(만자의 개발일지)](https://yoo11052.tistory.com/165#:~:text=async&await%20async%EC%99%80%20await%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EC%B5%9C%EA%B7%BC%EC%97%90%20%EB%82%98%EC%98%A8%20%EB%B9%84%EB%8F%99%EA%B8%B0,%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC%20%EB%8D%94%EC%9A%B1%20%EA%B0%84%ED%8E%B8%ED%95%98%EA%B2%8C%20%EA%B0%80%EB%8F%85%EC%84%B1%EC%9E%88%EB%8A%94%20%EC%BD%94%EB%93%9C%EB%A5%BC%20%EC%9E%91%EC%84%B1%ED%95%A0%20%EC%88%98)

- [velog 참고 - JS 비동기 처리에 대해 설명해주세요](https://velog.io/@kados22/FE-%EA%B8%B0%EC%88%A0-%EB%A9%B4%EC%A0%91-JS-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94#:~:text=1%EF%B8%8F%E2%83%A3%20%EB%B9%84%EB%8F%99%EA%B8%B0%20%ED%95%A8%EC%88%98%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.%EB%B9%84%EB%8F%99%EA%B8%B0%20%ED%95%A8%EC%88%98%EB%9E%80%20%ED%95%A8%EC%88%98%EC%9D%98,%EC%BD%9C%EB%B0%B1%20%ED%95%A8%EC%88%98%EB%8A%94%20%EB%B9%84%EB%8F%99%EA%B8%B0%20%EC%9E%91%EC%97%85%EC%9D%B4%20%EC%99%84%EB%A3%8C%EB%90%98%EC%97%88%EC%9D%84%20%EB%95%8C%20%ED%98%B8%EC%B6%9C%EB%90%98%EA%B3%A0%2C)

- [블로그 참고 - Javascript 비동기 함수의 동작원리 (feat. EventLoop)(호롤리)](https://gruuuuu.hololy.org/javascript/async-js/)

- [티스토리 참고 - 자바스크립트의 핵심 '비동기' 완벽 이해(Inpa Dev)](https://inpa.tistory.com/entry/%F0%9F%8C%90-js-async)
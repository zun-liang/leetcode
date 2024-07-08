# Learning Notes

## 2024/06/09

### 771 Jewels and Stones

- [RegExp() Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)

    > "The RegExp() constructor creates RegExp objects."

## 2024/06/12

### 2723 Add Two Promises

- [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

    > "The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason."

- Promise Types:
    `Promise<string>`
    `Promise<number>`
    ...

## 2024/06/14

### 2627 Debounce

- setTimeout type: `ReturnType<typeof setTimeout>`
- [Debounce - How to Delay a Function in JavaScript (JS ES6 Example)](https://www.freecodecamp.org/news/javascript-debounce-example/)

## 2024/06/25

### 2634 Filter Elements From Array

- [Function: length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)

    > "The length data property of a Function instance indicates the number of parameters expected by the function."

## 2024/06/26

### 2619 Array Prototype Last

- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

    >"The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects."

### 2620 Counter

- [Increment(++)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

    >"The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed."

    >"If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing."

    >"If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing."

### 2665 Counter II

- Functions can be used as values in objects.

## 2024/06/28

### 2649 Nested Array Generator

- [function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

    >"The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances."

    >"You can also define generator functions using the function* expression."

- [yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

    >"The yield operator is used to pause and resume a generator function."

- [yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)

    >"The yield* operator is used to delegate to another iterable object, such as a Generator."

- [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

    >"The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol."

    >"Generator is a subclass of the hidden Iterator class."

- [Generator.prototype.next()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)

    >"The next() method of Generator instances returns an object with two properties done and value. You can also provide a parameter to the next method to send a value to the generator."

## 2024/07/04

### 2726 Calculator with Method Chaining

- [Exponentiation assignment (**=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)


## 2024/07/06

### 1837 Sum of Digits in Base K

- [Number.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

    `toString(radix)`
    An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.

    This converts number in base 10 to something else.

- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

    `parseInt(str, radix)`
    This converts number into base 10.

### 2807 Insert Greatest Common Divisors in Linked List

- [How to implement a Linked List in JavaScript](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)
- To calculate GCD:

    ```
    const gcd = (a: number, b: number): number => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
    };
    ```

## 2024/07/08

### 1683 Invalid Tweets

- char_length()
- [PostgreSQL String Functions and Operators](https://www.postgresql.org/docs/9.1/functions-string.html)
export {};

// Did you forget to include 'void' in your type argument to 'Promise'

// EXAMPLE 1 - Type the value of the `Promise` to `void` to solve the error

function getPromise() {
  // 👇️ type Promise value as void
  return new Promise<void>((resolve, reject) => {
    resolve();
  });
}

// ---------------------------------------------------

// // EXAMPLE 2 - Use a union type if the Promise may get resolved with multiple types

// function getPromise() {
//   return new Promise<number | string>((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve(1000);
//     }

//     resolve('bobbyhadz.com');
//   });
// }

// ---------------------------------------------------

// EXAMPLE 3

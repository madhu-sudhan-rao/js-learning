// let promise = new Promise((resolve, reject) => {
//   let a = 1 + 1;

//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject(new Error("Failed"));
//   }
// });

// console.log("Running!!");

// promise
//   .finally(() => {
//     console.log("Finally is executed");
//     return 5;
//   })
//   .then((value) => {
//     console.log(value);
//     return 5;
//   })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(error);
//     },
//   );

// Callback to promise
// function getUser(id, callback) {
//   console.log("Fetching user...");

//   setTimeout(() => {
//     const user = { id: id, name: "John" };
//     callback(null, user); // (error, result)
//   }, 1000);
// }

// // Call the function
// getUser(1, function (error, user) {
//   if (error) {
//     console.log("Error:", error);
//   } else {
//     console.log("User received:", user);
//   }
// });

// function getUserPromise(id) {
//   return new Promise((resolve, reject) => {
//     console.log('Fetching user...')
//     setTimeout(() => {

//     if(id === 1) {
//       const user = { id: id, name: "John" };
//       return resolve(user);
//     }
//     reject(new Error('User not found'))
//     }, 1000)

//   })
// }

// getUserPromise(1).then(user => console.log(user))
//   .catch(error => console.error(error))

// Question 1
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(value => console.log(value)); // Only logs 1. because Promises ignores all the resolve/reject after one resolve/reject is called

// Question 2
// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:
// function delay(ms) {
//   return new Promise((resolve,reject) => setTimeout(resolve,ms))
// }

// delay(3000).then(() => console.log('runs after 3 seconds'));

// 1. Create a Promise that resolves after 2 seconds
// function promiseAfter2Seconds(seconds) {
//   return new Promise((resolve, reject) => {
//     if (!seconds) return reject(new Error("Please enter valid seconds"));
//     setTimeout(resolve, seconds);
//   });
// }

// promiseAfter2Seconds(1000).then(() => console.log("Resolved after 2 seconds"));

// 2. Create a Promise that randomly resolves or rejects
// function randomPromiseResult() {
//   return new Promise((resolve, reject) => {
//     const random = Math.random() < 0.5 ? 0 : 1;
//     console.log("Random", random);
//     if (random) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// randomPromiseResult()
//   .then(() => console.log("Success"))
//   .catch(() => console.log("Error"));

// 4. Create a function that returns a Promise of user data
// getUser(1) → resolve
// getUser(2) → reject with "User not found"

// 5. Chain .then() to transform values
// function chainPromiseValue() {
//   return new Promise((resolve, reject) => {
//     return resolve(5);
//   });
// }

// chainPromiseValue()
//   .then((value) => {
//     console.log("Resolved: ", value);
//     return 5;
//   })
//   .then((value) => value * 2)
//   .then((value) => {
//     console.log("Multiplied: ", value);
//     return value + 10;
//   })
//   .then((value) => console.log("Transformed: ", value));

//my promise all
// function myPromiseAll(promises) {
//   // 1- return a wrapper promise
//   // track all the promises result
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completedCount = 0;

//     // Handle Empty
//     if (!promises || promises.length === 0) {
//       resolve(results);
//       return;
//     }

//     promises.forEach((promise, index) => {
//       Promise.resolve(promise).then((value) => {
//         results[index] = value;
//         completedCount++;

//         if(completedCount === promises.length) {
//           resolve(results)
//         }
//       }).catch((error) => {
//         reject(error)
//       })
//     });
//   });
// }


function getUserAfter2seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: 'Gordon Coleman',
        id: '88c05269-2086-5963-b2ad-8c61576c27ab',
        url: 'http://asreot.lb/mabka',
        ip: '233.250.231.59',
        email: 'nucbi@umu.tz'
      }
      resolve(user)
    }, 2000)
  })
}

async function executeGetUserAfter2seconds() {
  // getUserAfter2seconds().then(
  //   (value) => {
  //     console.log("user: ", value);
  //   }
  // ).catch((error) => {
  //   console.error("Error: ", error)
  // })

  // better
  try {
    const user = await getUserAfter2seconds();
    console.log("User", user)
  } catch {
    console.error("Error: ", error)
  }
}

function customDelay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const msg = `Delay of ${ms}`
      resolve(msg)
    }, ms)
  })
}

async function delayOf3sec() {
  try {
    const value = await customDelay(4000);
    console.log(value);
    
  } catch {
    console.error("Error: ", error)

  }
}

function customDebounce(callback, ms) {
  let timerId;
  return function(...args) {
    // 1. Clear previous timeout
    clearTimeout(timerId);
    // 2. assign latest function call to the timer
    timerId = setTimeout(() => callback.apply(this, args), ms)
  }          
}

function executeCustomDebounce() {
  const debouncedSearch = customDebounce((q) => {
    console.log("Searching " , q);
    
  }, 2000)

  debouncedSearch("m")
  debouncedSearch("mq")
  debouncedSearch("ma")
 
}


function safeDivide(dividend, divisor) {

  return new Promise((resolve, reject) => {
    if(divisor === 0) {
      reject(new Error("Cannot divide by zero"));
    }
    resolve(dividend / divisor);
  })

}

function executeSafeDivide() {
  const dividend = parseInt(prompt("Enter the dividend"));
  const divisor = parseInt(prompt("Enter the divisor"));
  safeDivide(dividend, divisor)
  .then((value) => console.log("Value", value))
  .catch((error) => console.error("Error: ", error))
}



const fetchUser = id => new Promise.resolve({id: 1, name: 'Cordelia Banks'});
const fetchPosts = id => new Promise.reject(['Danny Wade', 'Bertha Mendoza', 'Marian Frank'])

function chainingWithThen() {
  fetchUser(1).then((user) => fetchPosts(user.id)).then((posts) => console.log(posts.length));
}

const getA = () => new Promise(res => setTimeout(() => res("A"), 3000));
const getB = () => new Promise(res => setTimeout(() => res("B"), 100));
const getC = () => new Promise(res => setTimeout(() => res("C"), 200));

function parallelFetch() {
   Promise.allSettled([getA(), getB(), getC()]).then((results) => {
    const values = results.map(result => result.value)
    console.log(...values);    
   });  
}


// Race accepts an array of promises
function customPromiseRace(promiseArray) {
  // returns a new single promise
  return new Promise((resolve, reject) => {

  })
}
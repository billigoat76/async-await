const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved value!!");
    }, 3000);
  });
  
  
  // 📌 Promise.then/.catch way
  function getData() {
    // JS engine will not wait for promise to be resolved
    p.then((res) => console.log(res));
    console.log("Hello There!");
  }
  
  getData(); // First `Hello There!` would be printed and then after 3 secs 'Promise resolved value!!' will be printed.
  // Above happened as Javascript wait for none, so it will register this promise and take this callback function and register separately then js will move on and execute the following console and later once promise is resolved, following console will be printed.
  
  
 
  // Let's create one promise and then resolve two different promise using async/await syntax
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved value by p2!!");
    }, 2000);
  });
  
  async function handlePromise() {
    console.log("Hi");
    const val = await p;
    console.log("Hello There!");
    console.log(val);
  
    const val2 = await p2;
    console.log("Hello There! 2");
    console.log(val2);
  }
  handlePromise();
  // 📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value by p2!!') will get printed immediately. So even though `p2` was resolved after 2 secs it had to wait for `p` to get resolved
  
  // Now let's reverse the order execution of promise and observe response.
  async function handlePromise2() {
    console.log("Hi");
    const val = await p2;
    console.log("Hello There!");
    console.log(val);
  
    const val2 = await p;
    console.log("Hello There! 2");
    console.log(val2);
  }
  handlePromise2();
  // 📌 `Hi` printed instantly -> now code will wait for 2 secs -> After 2 secs ('Hello There!' 'Promise resolved value by p2!!') will get printed and in the subsequent second i.e. after 3 secs ('Hello There! 2' 'Promise resolved value!!') will get printed
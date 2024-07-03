// A memoized function is a function that will never be called twice with 
// the same inputs. Instead it will return a cached value.

/**
 * @param {Function} fn 
 * @return {Function}
 */

function memoize(fn) {
    //create an empty array to store the arguments as keys
    const cache = []; 
    return function(...args) {
        const key = JSON.stringify(args);
        //check if our argument or key exists in our cache array
        //if so, we want to return the value from our array instead of 
        //executing our program - less effort
        //otherwise, we store the new passed argument in a newKey 
        //and we add it to our array using apply method and return the newKey
        if(key in cache) {
            return cache[key];
        }

        const newKey = fn.apply(this, args);
        cache[key] = newKey;

        return newKey;
        console.log(cache[newKey]);
    }
}

//testing function 
//fib accepts a single integer 'n' and returns 
//1 if n <= 1 or 
//fib(n-1)+fib(n-2)
const memorizedFib = memoize(function fib (n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return (n - 1) + (n - 2);
    }
});

console.log(memorizedFib(3));
console.log(memorizedFib(1));
console.log(memorizedFib(3));
console.log(memorizedFib(2));

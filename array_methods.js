console.log('Array methods()');
console.log('------------------------');
const nums = [111, 22, 13, 54, 5];
/*
    1. forEach(value, index, array) - This is a callbackfn. A function that accepts up to three arguments.
    forEach calls the callbackfn function one time for each element in the array.
*/
console.log('1. forEach() >> ');
console.log('...............');
nums.forEach((num, idex, array) => {
    console.log(`Index >> ${idex}, element - ${num}, array - ${array}`)
});//for iterating
console.log('------------------------ ');
/*
    2. includes(searchElement, fromIndex) - Determines whether an array includes a certain element, returning true or false as appropriate.
     -- checks if 1st arg is available in the array, 2nd arg is from which element it has to start searching
*/
console.log('2. includes() >> ');
console.log('...............');
console.log(nums.includes(3,1));
console.log('------------------------');

/*
    3. filter(num, index, array) - Returns the elements of an array that meet the condition specified in a callback function.
     A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
*/
console.log('3. filter() >> ');
console.log('...............');
console.log(nums.filter((num) => num < 4));
console.log('------------------------');

/*
    4. reduce(accumulator, currentValue, currentIndex, array) 
        - A function that accepts up to four arguments.
        - Calls the specified callback function for all the elements in an array. 
        - The return value of the callback function is the accumulated result, and is provided as an argument in 
          the next call to the callback function.
        - initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. 
          The first call to the callbackfn function provides this value as an argument instead of an array value.

    note: Remember that calling reduce() on an empty array without initialValue will throw TypeError.
*/
console.log('4. reduce() >> ');
console.log('...............');
const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sum);
console.log('------------------------');

/*
    5. some(value, index, array) -
        - Determines whether the specified callback function returns true for any element of an array.
        - A function that accepts up to three arguments. 
        - The some method calls the predicate function for each element in the array until the predicate 
          returns a value which is coercible to the Boolean value true, or until the end of the array.
*/
console.log('5. some() >> ');
console.log('...............');
console.log(nums.some(num => num > 4));//if atleast once this condition gets satisfied, this is going to return true.
console.log('------------------------');

/*
    6. every(value, index, array) - 
        - Determines whether all the members of an array satisfy the specified condition.
        - A function that accepts up to three arguments. 
*/
console.log('6. every() >> ');
console.log('...............');
console.log(nums.every(num => num < 10));
console.log('------------------------');

/*
    7. sort() -
        - Sorts an array in place. This method mutates(changes) the array and returns a reference to the same array.
        - Function used to determine the order of the elements. 
        - It is expected to return a negative value if first argument is less than second argument, 
        - zero if they're equal and a positive value otherwise. 
        - If omitted, the elements are sorted in ascending, ASCII character order.
        - sorts array from left to right 
*/
console.log('7. sort() >> ');
console.log('...............');
const sortedArray = [22, 3, 9, 78].sort((a, b) =>  a<b )
console.log(sortedArray);
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.sort());
console.log('------------------------');

/*
    8. reverse() - Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
*/
console.log('8. reverse() >> ');
console.log('...............');
console.log(sortedArray.reverse());
console.log('------------------------');

/*
    9. concat(array1) -
        -   Combines two or more arrays. This method returns a new array without modifying any existing arrays.
*/
console.log('9. concat() >> ');
console.log('...............');
const num2 = [90, 78, 56, 3];
console.log(num2.concat(nums));
console.log('------------------------');

/*
    10. map - A Map holds key-value pairs where the keys can be any datatype.
        - A Map remembers the original insertion order of the keys.
        - A Map has a property that represents the size of the map. 
*/
console.log('10. map() >> ');
console.log('...............');
//map solves problem which we've with Object i.e map allows multiple key objects whereas objects overwrite.
const myMap = new Map([ ['name', 'John'], ['age', '20'] ]);
console.log(myMap);
//map - sample 2
const myMapObj = new Map([ [{}, 'a'], [{}, 'b'], [1, 'one'], [2, 'two']]);
console.log(myMapObj);
myMapObj.set('c', 'c val');//map has set method which allows us to add key-values
console.log(myMapObj);
myMapObj.delete(1);//map has delete method
console.log(myMapObj.has('c'));//checks if the mentioned element is in the map or not, it returns a boolean value.
myMapObj.delete(1);//map has delete method
console.log(myMapObj);
console.log(myMapObj.size);//size of the map
console.log('------------------------');

/*
    11. push(element1, elements2.....) - Appends new elements to the end of an array, and returns the new length of the array.
*/
console.log('11. push() >> ');
console.log('...............');
const fruits = ['apple', 'mango', 'gauva'];
fruits.push('banana', 'grapes');
console.log(`fruits - ${fruits}`);
console.log('------------------------');

/*
    12. pop() 
        -   Removes the last element from an array and returns it. If the array is empty, 
        -   undefined is returned and the array is not modified.
*/
console.log('12. pop() >> ');
console.log('...............');
console.log(`fruits - ${fruits.pop()}`);
console.log('------------------------');

/*
    13. shift()
        -  Removes the first array element and shifts all other elements to a lower index and returns the value that was shifted out.
*/
console.log('13. shift() >> ');
console.log('...............');
console.log(`fruits - ${fruits.shift()}`);
console.log('------------------------');

/*
    14. unshift() - Inserts new elements at the start of an array, and returns the new length of the array.
*/
console.log('14. unshift(item) >> ');
console.log('...............');
const states = ["AP", "TS", "MP", "MH", "KL"];
console.log(`fruits - ${states.unshift('JK')}`);
console.log('fruits -'+ states);
console.log('------------------------');

/*
    15. splice(startIndex, deleteCount) - 
        -   Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
*/
console.log('15. splice(startIndex, deleteCount) >> ');
console.log('...............');
let arr = ["Javascript", "is", "my", "favourite", "love"];
arr.splice(0, 2);//from idex 0 removes 2 elements
console.log(arr);
console.log('------------------------');

/*
    16. slice(startIndex, endIndex) -
        -   Returns a copy of a section of an array. For both start and end,
        -   a negative index can be used to indicate an offset from the end of the array. 
        -   For example, -2 refers to the second to last element of the array.

        //The beginning index of the specified portion of the array. If start index is undefined, then the slice begins at index 0.
*/
console.log('16. slice(startIndex, endIndex) >> ');
console.log('...............');
let numbers = [12, 43, 242, 25, 6, 11, 12, 0, 89];
console.log(numbers.slice(undefined, 4));// If startIndex is undefined, then the slice begins at index 0.
console.log(numbers.slice(2, 5));// If startIndex is undefined, then the slice begins at index 0.
console.log('------------------------');

/*
    17.  join() -
        -   Adds all the elements of an array into a string, separated by the specified separator string.
*/
console.log('17. join(startIndex, endIndex) >> ');
console.log('...............');
let prof = ["Divya", "is", "a", "Web", "Developer"];
console.log(prof.join(" "));//Output - Divya is a Web Developer
console.log(prof.join("-"));//Output - Divya-is-a-Web-Developer






















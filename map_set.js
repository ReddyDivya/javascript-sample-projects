/*
set - 
    *A Set is a collection of unique values.
    *Removes duplicates.
    *It can hold any value of any data type.
*/
const mySet = new Set([1, 22, 3, 55, 3, 55, 6, 75]);
console.log(`...........................`);
console.log(`set`);
console.log(...mySet);
mySet.add({name : 'divya'});//add element to the set
mySet.add([1, 100]);
mySet.add([112, 23]);
console.log(...mySet);
mySet.delete(3);//delete element from the set
console.log(...mySet);
console.log('has - ' + mySet.has(55));//checks if the mentioned element is in the set or not, it returns a boolean value.
console.log(mySet.size);//size of the set
mySet.clear();//clear the set
console.log('Clearing' + [...mySet]);

/*
map - A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the original insertion order of the keys.
    A Map has a property that represents the size of the map. 
*/
console.log(`...........................`);
console.log(`map`);
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
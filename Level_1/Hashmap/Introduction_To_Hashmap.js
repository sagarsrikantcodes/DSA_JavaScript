/*
Introduction to Hashmap 

What is a Hashmap?
A hashmap is a data structure which has an amazing property that most of the operations which we perform on it are done in O(1) time complexity. The data is stored in a hash-map in the form of key-value pairs. For instance: consider the following data about the population of various countries:

India => 140
China => 135
USA => 0.3 
Canada => 0.03

If the data stored above in the table (fig-1) is stored in a hashmap then it is stored in the form of a key-value pair. We can decide what can be the key and what can be the value. Here, it seems pretty obvious that the name of a country should be the key and its population should be the value. Why? Think about this!!!

Another example of the key-value pairs (which you might be interested in) is for a college canteen. Let's say there are two tables. One is for which day, what is the menu and other is say for the price of each item:

Mon => [Samosa, Parantha]
Tue => [Pizza, Pasta] 
Wed => [Chowmein, Samosa] 
Thu => [Chillipotato, Parantha] 
Fri => [Pizza, Veg Roll] 
Sat => [Pasta, Chilli Potato] 


Samosa => 10
Parantha => 25 
Chowmein => 40 
VegRoll => 45 
Pizza => 45 
Pasta => 45 
Chilli Potato => 50 

These two tables can be stored in two hashmaps. One will have both key and value as a string (menu table) and the other will have key as a string and value as an integer. So, we can have any combination of data types when we talk about hashmaps. Also, there is one important thing to note in the price of the items table above (fig-3). Three items, vegetarian-roll, pizza and pasta, all have a price of 45. So, different keys can have the same values. But can we have multiple pasta keys or multiple pizza keys in the hashmap? You will get to know this very soon. Let's discuss the creation of a hashmap and perform some operations on it. 

Create a Hashmap
Let us try to write the code to create a hashmap. Like any other data structure we will create it with the help of the new keyword. The code to create a hashmap is given below:

const map = new Map();

We have created a hashmap but we have not inserted any values in it. So, we should get an empty hashmap when we print it. So, the output that we get is:

Map(0) {} 

This is what an empty hashmap looks like. So, let's now try to insert some values into it and then display it.

Put into Hashmap:

Time Complexity:
O(1)

We can use the put(key,value) function to put some values into the hashmap. There are two possible cases while we are using the put(key,value) function in a hashmap.

The key is not present: If the key is not present in the hashmap it will get inserted.
The key is already present: If the key is already present, we cannot insert the same key again. The value of the existing key will get updated in the hashmap. 

Let us insert the population of various countries into the hashmap:

map.set("India", 140);
map.set("China", 135);
map.set("USA", 0.3);
map.set("Canada", 0.03);


console.log(map);


Map(4) {
  'India' => 140,
  'China' => 135,
  'USA' => 0.3,
  'Canada' => 0.03
}

We first try to insert the four countries with their population and print the hashmap. These will get inserted as there is no key already present with the same name. Now, we try to again insert the key "USA" which is already present. So, its value will get updated. (Have a look at the output given below)

map.set("Nigeria", 5);
map.set("USA", 0.35);
console.log(map);

Map(5) {
  'India' => 140,
  'China' => 135,
  'USA' => 0.35,
  'Canada' => 0.03,
  'Nigeria' => 5 
}

Get a value in Hashmap
Time Complexity:
O(1)

We can use the get(key) function in a hashmap to get the value corresponding to a particular key in the hashmap. There can be two possible cases for this:

If the key exists: If the key exists, you will get the value of that key by using this function.
If the Key doesn't Exist: If the key doesn't exist, this function will return undefined. 

Let us try to get from the hashmap that we created above, both, a value for which key exists and one for which it doesn't.

When we try to get the value for key "India", it already exists and we get the value that we set earlier but key "Ethopia" doesn't exist in the hashmap so we get undefined for it (Refer to the output given below)

console.log(map.get("India")); // 140
console.log(map.get("Ethopia")); // undefined since there is no key named "Ethopia" in the hashmap. 

Contains Key in Hashmap
Time Complexity:
O(1)

This is a Boolean function. We pass a particular key value as a parameter to this function. If the hashmap contains that key, it returns true else it returns false. So, let us implement it: 

We have checked whether the hashmap contains the keys "India" and "Ethopia" in it or not. We get true for the key "India" as it exists in the hashmap and we get false for the key "Ethopia" as it does not exist. (refer to the output below)

console.log(map.has("India")); // true 
console.log(map.has("Ethopia")); // false 

Now let us study another function called keyset.

Key Set in Hashmaps
Time Complexity:
O(1)

We know that we have key-value pairs in a hashmap. We can get only the keys in a hashmap by using the keys() function. The key set function returns the set of all the keys in a hashmap. We can store it in a Map Iterator. We will study about the Map Iterator later. For now, you can just understand that to get the Set of keys, we store it in a Iterator. The implementation is given below:

// Extract all the keys from the hashmap 
let keysIterator = map.keys();
console.log(keysIterator); // [Map Iterator] { 'India', 'China', 'USA', 'Canada', 'Nigeria' }  

Map.prototype.forEach()
The forEach() method of Map instances executes a provided function once per each key/value pair in this map, in insertion order. 

function logMapElements(value, key, map) {
  console.log(`${key} => ${value}`);
}

// Displaying the key value pairs by looping using forEach() method 
map.forEach(logMapElements); 

The Map.forEach() method is used to loop over the map with the given function and execute the given function over each key-value pair.

Syntax
JS
Copy to Clipboard

forEach(callbackFn)
forEach(callbackFn, thisArg)
Parameters
callbackFn
A function to execute for each entry in the map. The function is called with the following arguments:

value
Value of each iteration.

key
Key of each iteration.

map
The map being iterated.

thisArg Optional
A value to use as this when executing callbackFn.

Return value
None (undefined).

Description
The forEach method executes the provided callback once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value undefined.

callback is invoked with three arguments:

the entry's value
the entry's key
the Map object being traversed
If a thisArg parameter is provided to forEach, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

Each value is visited once, except in the case when it was deleted and re-added before forEach has finished. callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.

map.forEach((value, key) => console.log(key, value));

 Using for…of loop
The for…of loop iterates over the iterable objects (like Array, Map, Set, arguments object, …, etc), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

Syntax:

for ( variable of iterableObjectName) {
    ...
}

Example: In this example, we are using for…of the loop to iterate over the map object. 

// Display the key value pairs of a hashmap using for...of() loop 
for (let [key, value] of map) {
  console.log(`${key} => ${value}`);
} 

Outputs:
India => 140
China => 135
USA => 0.35
Canada => 0.03
Nigeria => 5

*/

const map = new Map();
map.set("India", 140);
map.set("China", 135);
map.set("USA", 0.3);
map.set("Canada", 0.03);


console.log(map);
/*

Map(4) {
  'India' => 140,
  'China' => 135,
  'USA' => 0.3,
  'Canada' => 0.03
}

*/
console.log();
map.set("Nigeria", 5);
map.set("USA", 0.35);
console.log(map);

/*

Map(5) {
  'India' => 140,
  'China' => 135,
  'USA' => 0.35,
  'Canada' => 0.03,
  'Nigeria' => 5
}

*/
console.log();
console.log(map.get("India")); // 140
console.log(map.get("Ethopia")); // undefined since there is no key named "Ethopia" in the hashmap. 
console.log();
console.log(map.has("India")); // true 
console.log(map.has("Ethopia")); // false

// Extract all the keys from the hashmap 
let keysIterator = map.keys();
console.log(keysIterator); // [Map Iterator] { 'India', 'China', 'USA', 'Canada', 'Nigeria' } 
console.log();

function logMapElements(value, key, map) {
  console.log(`${key} => ${value}`);
}

// Displaying the key value pairs by looping using forEach() method 
map.forEach(logMapElements);

console.log();

// Display the key value pairs of a hashmap using for...of() loop 
for (let [key, value] of map) {
  console.log(`${key} => ${value}`);
}

console.log();

map.forEach((value, key) => console.log(key, value));


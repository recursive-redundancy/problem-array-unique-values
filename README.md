# Code Practice - Find the number of unique values in an array
Given an array, return the number (the count) of unique values.

## Example:

Input: [4, 2, 1, 2, 1, 1]

Output: 3

### Explanation
The unique values are 1, 2, 4 which is 3 unique values, so the return is 3.

# Solution
There are several ways to solve this particular problem. The following explains each.

## Solution 1
This method takes advantage of the JavaScript ES6 built-in Set object. The Set object only allows unique values. We create a new Set from the supplied array, which will include only all the unique values from array. Then we simply count the size of the new Set, using the size property.

### Time Complexity
* The Set.size property is O(1) constant time.
* The new Set() operation is O(n) linear time.

Therefore this method is O(n) linear time.

## Solution 2
This method utilizes JavaScript's built-in Map Object to build a Hash Map of every unique value found in the array. We iterate each element in the array, and use the Map.prototype.set to add the element to the Map. Since the set method will update the item if it already exists, the resulting Map will contain only unique values. After we have traversed the entire array, we use the Map.prototype.size property to determine how many unique values there are.

### Time Complexity
* The Map.size property is O(1) constant time.
* The Map.set operation is O(logn) logarithmic time.
* Traversing the array takes O(n) linear time.

Therefore this method is O(nlogn) log-linear time.

# Testing
A test.js script is included for unit testing. Test is run on a set of different arrays - one of the array tests being an empty array (returns 0). Test is run by 'npm test' command.
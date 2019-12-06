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

# Testing
A test.js script is included for unit testing. Test is run on a set of different arrays - one of the array tests being an empty array (returns 0). Test is run by 'npm test' command.
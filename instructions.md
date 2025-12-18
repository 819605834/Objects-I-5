Write a function called `getAverageOfElements` which takes two parameters:

- `obj` - an object 
- `key` - a string

The function should return the average of all the elements in the array located at the given key.

**Notes**:

- If the array at the given key is empty, it should return 0.
- If the value at the given key is not an array, it should return 0.
- If there is no property at the given key, it should return 0.

**For example:**

```
var obj = {
```

```
  key: [1, 2, 3]
```

```
};
```

```
var output = getAverageOfElements(obj, 'key');
```

```
console.log(output); // should print 2
```


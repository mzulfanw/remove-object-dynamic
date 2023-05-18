# Note

This package currently add new function to handle deep object and remove it

# Remove Object Dynamic
You can remove unnecessary payload without stress.

### How to use this package 
```
// * Lets say you have payload like this 
import { removeObjectDynamic, removeObjectDeepDynamic } from 'remove-object-dynamic'

const payload = {
  name: null,
  age: null,
  works: undefiend,
  status: 'Work'
}

const payload2 = {
  age: null,
  works: undefiend,
  status: 'Work',
  fullName: {
    first: 'Zulfan',
    last: ''
  }
}

console.log(removeObjectDynamic(payload))

console.log(removeObjectDeepDynamic(payload2))

// * Result 
// First Result
{ status: 'Work' }

// Second result 
{ status: 'Work', fullName: { first: 'Zulfan' } }
 ```
# Remove Object Dynamic
You can remove unnecessary payload without stress

### How to use this package 
```
// * Lets say you have payload like this 
import { removeObjectDynamic } from 'remove-object-dynamic'

const payload = {
  name: null,
  age: null,
  works: undefiend,
  status: 'Work'
}

removeObjectDynamic(payload)

// * Result 
{ status: 'Work' }
 ```
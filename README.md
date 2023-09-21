# JSWrapperParser

Straight out of the oven, built using bun and speedy web compiler, this library exposes a utility for parsing exports of a certain structure and validating them against module imports (at the AST level without loading any files). This is helpful when you may not have all dependencies installed and want to preliminarily evaluate the imports and exports of a JS module.

## Example
Below is an example of how to use the utility:

### test.js
```js
import { parseTopLevelWrappers } from ".";

const config = {
    wrappers: {
        Person: {
            fields: {
                name: { type: "string" },
                age: { type: "number", required: false }
            },
            import: { module: "mymodule" }
        },
    },
}

parseTopLevelWrappers("input/test.jsx", config).then(parsed => {
    console.log(parsed);
}).catch(e => console.log(e));
```

### test.jsx
```jsx
import { Person } from "mymodule";

export const specificPerson = Person({
    name: "Joe",
    age: 3
});

export default Person({
    name: "Joe",
});
```

### Parser output
```js
[
  {
    wrapper: "Person",
    name: "specificPerson",
    default: false,
    fields: {
      name: "Joe",
      age: 3
    }
  }, {
    wrapper: "Person",
    name: null,
    default: true,
    fields: {
      name: "Joe"
    }
  }
]
```

Everyone is welcome to contribute to this library! All help is appreciated.
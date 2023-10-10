import { parseWrappers } from ".";

const config = {
  wrappers: {
    Person: {
      fields: {
        name: { type: "string" },
        age: { type: "number", required: false },
      },
      import: { module: "mymodule" },
    },
  },
};

// parseWrappers("input/", config)
//   .then((parsed) => {
//     console.log(JSON.stringify(parsed))
//   })
//   .catch((e) => console.log(e));

const parsed = parseWrappers("input/", config);
console.log();
console.log();
console.log(parsed);
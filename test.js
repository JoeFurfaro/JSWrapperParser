import { parseWrappers } from ".";

const config = {
  wrappers: {
    Person: {
      fields: {
        name: { type: "string" },
        age: { type: "number", required: false },
        isMarried: { type: "boolean", required: true },
        permissions: { type: "array", required: true }
      },
      import: { module: "mymodule" },
    },
  },
};

parseWrappers("input/test.jsx", config)
  .then((parsed) => {
    console.log(JSON.stringify(parsed))
  })
  .catch((e) => console.log(e));

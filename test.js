import { parseWrappers } from ".";

const config = {
  wrappers: {
    Person: {
      fields: {
        name: { type: "string" },
        age: { type: "number", required: false, default: 3 },
        devices: {type: "array", required: false, default: [] }
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

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

parseWrappers("input/test.jsx", config)
  .then((parsed) => {
    console.log(parsed);
  })
  .catch((e) => console.log(e));

import { parseWrappers } from ".";

const config = {
  wrappers: {
    Person: {
      fields: {
        name: { type: "string" },
      },
      import: { module: "mymodule" },
    },
    Wes: {
      fields: {
        thing: { type: "string" },
      },
      import: { module: "mymodule" },
    },
  },
};

const parsed = parseWrappers("input/", config);
console.log(JSON.stringify(parsed));
import { Person } from "mymodule";

export const specificPerson = Person({
  name: "Joe",
});

export default Person({
  name: "Joe",
  age: 12,
  something: [1,[24,"hi", true, a],3],
  isMarried: false,
});

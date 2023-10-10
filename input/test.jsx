import { Person } from "mymodule";

export const specificPerson = Person({
  name: "Joe",
  age: 3,
  isMarried: true,
  permissions: ["some.perm", "another.perm", 4, 6, [false, false, [true, true]], () => {console.log("Test")}]
});

export default Person({
  name: "Joe",
  age: 12,
  something: [1,[24,"hi", true, a],3],
  isMarried: false,
});

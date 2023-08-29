import boys from "./boys.js";
import girls from "./girls.js";

function getNamesByDecade(decade, gender) {
  let names;
  if (gender === "boys") {
    names = boys.split(",");
  } else {
    names = girls.split(",");
  }
  return names.filter((name, index) => {
    return index % 10 === decade;
  });
}

export default getNamesByDecade;

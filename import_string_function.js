import { uppercaseString, lowercaseString } from "./export_string_functions.js";

alert(uppercaseString("hello"));
alert(lowercaseString("WORLD!"));

// similar way with "* as " syntax
// "* as " - allows us to import all contents from file into the current file.

import * as stringFunctions from "./export_string_functions.js"; // we create an object called stringFunctions
// the object will contain all of the export from string_functions.js
console.log(stringFunctions.uppercaseString("hello")); // now we can use our imported functions (like properties)
console.log(stringFunctions.lowercaseString("WORLD!"));

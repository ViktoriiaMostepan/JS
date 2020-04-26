'use strict';

let string = 'alala';

const pal = string => {
  console.log(string);
  if (string.length <= 1) {
    return 'yes';
  }
  if (string.substr(0, 1) !== string.substr(string.length - 1, 1)) {
    return 'no';
  } else {
    return pal(string.substr(1, string.length - 2));
  }
};
console.log(pal(string));

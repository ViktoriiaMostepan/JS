'use strict';

const string = 'assassa';

const pal = string => {
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

// _______________________________________________________________________________________________-

const pal2 = splitString => {
  if (splitString.length <= 1) {
    return 'yes';
  }
  if (splitString[0] !== splitString[splitString.length - 1]) {
    return 'no';
  } else {
    splitString.shift();
    splitString.pop();
    return pal2(splitString);
  }
};

const func = string => {
  const splitString = string.split('');
  return pal2(splitString);
};

console.log(func(string));

//_____________________________________________________________________________-

const pal3 = string => {
  const splitString = string.split('');

  if (splitString.length <= 1) {
    return 'yes';
  }
  if (splitString[0] !== splitString[splitString.length - 1]) {
    return 'no';
  } else {
    splitString.shift();
    splitString.pop();
    const newString = splitString.join('');
    return pal(newString);
  }
};

console.log(pal3(string));

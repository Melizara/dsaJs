var slash = "";
var antiSlash = "";
for (var i = 1; i <= 20; i++) {
  slash = slash + "/";
  antiSlash = antiSlash + "\\";
}

for (var j = 1; j <= 5; j++) {
  if (j % 2 !== 0) {
    console.log(slash);
  } else {
    console.log(antiSlash);
  }
}

// module "stor.js"

function clear() {
  console.clear();
}

function newLine(times) {
  for (let i = 0; i <= times; i++) {
    console.log();
  }
}

function start() {
  clear();
  console.log('... script starts ...');
  newLine(1);
}

function end() {
  newLine(1);
  console.log('... script ends ...');
  newLine(1)
}

module.exports = { clear, newLine, start, end };

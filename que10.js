console.log("--- Using Global Objects in Node.js ---");

console.log("__dirname:", __dirname);

console.log("__filename:", __filename);

global.myGlobalVar = "This is a global variable!";
console.log("Accessing global variable:", global.myGlobalVar);

console.log("Process ID:", process.pid);
console.log("Node.js version:", process.version);
console.log("Current working directory:", process.cwd());
console.log("Platform:", process.platform);

setTimeout(() => {
  console.log("This message is shown after 1 second using setTimeout.");
}, 1000);

const timer = setTimeout(() => {
  console.log("You will not see this because timer is cleared.");
}, 2000);
clearTimeout(timer);

console.log("This is a standard log message.");
console.error("This is an error message.");

const os = require("os");

//Basic system information
//Returns a string identifying the operating system platform.
console.log(`OS platform ${os.platform()}`);

//Returns the operating system name as returned by uname on
// POSIX systems, or from the ver command on Windows.
console.log(`OS type ${os.type()}`);

//Returns the operating system release number.
console.log(`OS Release ${os.release()}`);

//Returns the operating system CPU architecture for which the Node.js
// binary was compiled.
console.log(`CPU architecture ${os.arch()}`);

//Returns a string identifying the kernel version. On Windows,
// this includes build information.
console.log(`Kernel Version: ${os.version()}`);

//Returns the hostname of the operating system.
console.log(`Hostname ${os.hostname()}`);

//Returns the operating system's default directory for temporary files.
console.log(`Temporary Directory: ${os.tmpdir()}`);

//Memory information
const totalMemoryGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemoryGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemoryGB} GB free of ${totalMemoryGB} GB`);

// Get current user information
const user = os.userInfo();
console.log("User Information:");
console.log(`- Username: ${user.username}`);
console.log(`- User ID: ${user.uid}`);
console.log(`- Group ID: ${user.gid}`);
console.log(`- Home Directory: ${user.homedir}`);

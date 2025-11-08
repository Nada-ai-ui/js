// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");
// ===============================================
// FULL JAVASCRIPT EXAMPLE (ONLY JS)
// ===============================================

// Basic variables and constants
let name = "ChatGPT";
const version = 5;
let activeUsers = ["Alice", "Bob", "Charlie"];

// Function to greet users
function greetUser(user) {
  return `Hello, ${user}! Welcome to ${name} version ${version}.`;
}

// Loop through users and greet them
for (let user of activeUsers) {
  console.log(greetUser(user));
}

// Object to represent an online chatroom
let chatRoom = {
  roomName: "Global Chat",
  users: activeUsers,
  messages: [],
  
  sendMessage(user, message) {
    let time = new Date().toLocaleTimeString();
    this.messages.push({ user, message, time });
  },
  
  showMessages() {
    console.log(`\n--- Messages in ${this.roomName} ---`);
    this.messages.forEach(msg => {
      console.log(`[${msg.time}] ${msg.user}: ${msg.message}`);
    });
  }
};

// Send some messages
chatRoom.sendMessage("Alice", "Hey everyone!");
chatRoom.sendMessage("Bob", "Hello Alice!");
chatRoom.sendMessage("Charlie", "Good to see you both!");

// Display messages
chatRoom.showMessages();

// Example of using a class
class Bot {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }

  respond(input) {
    if (input.includes("hello")) return `${this.name}: Hi there!`;
    if (input.includes("how are you")) return `${this.name}: I'm feeling ${this.mood} today.`;
    return `${this.name}: Sorry, I didn’t understand that.`;
  }
}

// Create a bot and test responses
let bot = new Bot("HelperBot", "great");
console.log(bot.respond("hello"));
console.log(bot.respond("how are you"));
console.log(bot.respond("tell me a joke"));

// Demonstrate Promises and async/await
function simulateNetworkRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Server response: ${data.toUpperCase()}`);
    }, delay);
  });
}

async function getServerData() {
  console.log("\nFetching data from server...");
  let result1 = await simulateNetworkRequest("message one", 1200);
  console.log(result1);

  let result2 = await simulateNetworkRequest("message two", 800);
  console.log(result2);
  
  console.log("All data received ✅");
}

getServerData();

// Use ES6 Map and Set
let scores = new Map();
scores.set("Alice", 95);
scores.set("Bob", 87);
scores.set("Charlie", 92);

console.log("\nScores:");
for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("\nUnique numbers:", [...uniqueNumbers]);

// Demonstrate array methods
let numbers = [10, 20, 30, 40, 50];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 25);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("\nNumbers:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>25):", filtered);
console.log("Sum:", sum);

// End of program
console.log("\n✅ Script completed successfully!");

// Create a new Date (current date and time)
const now = new Date();
console.log("Now:", now);

// Get the year, month and day
console.log("Year:", now.getFullYear());
console.log("Month (0 = Jan):", now.getMonth());
console.log("Day of month:", now.getDate());

// Show a simple formatted date
console.log("Formatted:", `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);

// Create a custom date (year, month, day)
const myBirthday = new Date(2010, 7, 20); // June 20, 2010
console.log("My birthday:", myBirthday.toDateString());

// Calculate how many days since your birthday
const diffMs = now - myBirthday;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log("Days since my birthday:", diffDays);

// Add 7 days to the current date
const nextWeek = new Date();
nextWeek.setDate(now.getDate() + 7);
console.log("Next week:", nextWeek.toDateString());

// Show only the time
console.log("Time now:", now.toTimeString());

// Show date in local format
console.log("Local format:", now.toLocaleString("en-US"));
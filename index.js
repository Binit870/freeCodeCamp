// index.js
import fs from 'fs';

// Read the package.json file
const filePath = './package.json';
const data = fs.readFileSync(filePath, 'utf-8');

// Parse the JSON content
const packageJson = JSON.parse(data);

// Update the author field
packageJson.author = "Your Name"; // 🔁 Replace with your actual name

// Write the updated JSON back to package.json
fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2), 'utf-8');

console.log('✅ Author field updated successfully!');

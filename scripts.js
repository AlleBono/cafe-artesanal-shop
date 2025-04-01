
const { execSync } = require('child_process');
const fs = require('fs');

// Check if node_modules exists
if (!fs.existsSync('./node_modules')) {
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
}

// Run the development server
console.log('Starting development server...');
execSync('npx vite', { stdio: 'inherit' });

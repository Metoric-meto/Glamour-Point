const http = require('http');
const fs = require('fs');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const port = 8080;
const mongoUrl = 'mongodb+srv://Metoric:Metoric%4012004@glamourpoint.humiggw.mongodb.net/databasename?retryWrites=true&w=majority';
let db; // Database connection reference

// Connect to MongoDB
MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db(); // Reference to the database
});

const server = http.createServer(async (req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
  }[extname] || 'application/octet-stream';

  try {
    if (contentType.startsWith('image/')) {
      const imageStream = fs.createReadStream(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      imageStream.pipe(res);
    } else {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 Not Found');
    } else {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(`Internal Server Error: ${error.message}`);
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navbar a');
  const sections = document.querySelectorAll('section'); // Assuming each section is wrapped in a <section> tag

  const changeNavColor = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50; // Adjust for sticky header
          const sectionHeight = section.offsetHeight;
          const isInSection = scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;

          if (isInSection) {
              if (section.id === 'banner') {
                  navLinks.forEach((link) => link.style.color = '#ffffff'); // White color for home
              } else {
                  navLinks.forEach((link) => link.style.color = '#000000'); // Black color for other sections
              }
          }
      });
  };

  window.addEventListener('scroll', changeNavColor);
});

document.getElementById('search-button').addEventListener('click', function() {
  var location = document.getElementById('search-bar').value;
  if(location.trim() !== "") {
      alert('Searching for salons near: ' + location);
      // You can add real search functionality here, such as calling an API
      // For example, calling a service that gives salon details based on location.
  } else {
      alert('Please enter a location to search.');
  }
});

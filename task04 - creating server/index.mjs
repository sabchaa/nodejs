import fs from 'fs/promises'
import http from 'http'

const updateCounter = async (url, file) => {
    if (url === '/increase') {
        counter++;
    }
    else {
        counter--;
    }
    await fs.writeFile(file, counter.toString(), 'utf8');
}

const handleRequest = async (req, res) => {
    let counter = 0;
    try {
      const data = await fs.readFile('counter.txt', 'utf8');
      counter = parseInt(data);
    } catch (error) {
      await fs.writeFile('counter.txt', '0', 'utf8');
    }
  
    if (req.url === '/increase' || req.url === '/decrease') {
        updateCounter(req.url, 'counter.txt');
        res.end('OK');
    }
    else if (req.url === '/read') {
      res.end(counter.toString());
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  };
  
  const server = http.createServer(handleRequest);
  const PORT = 3000;
  
  server.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}/`);
  });

const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`<h1>Node.js в Docker на Render</h1>
<p>Время сервера: ${new Date().toISOString()}</p>
<p>Версия Node.js: ${process.version}</p>`);
});
server.listen(port, '0.0.0.0', () => console.log(`Server started on port ${port}`));

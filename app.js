const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>FORM</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' /><button>Send</button></from></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>APP</title></head>");
  res.write("<body><h1>Demo APP</h1></body>");
  res.write("</html>");
});

server.listen(3000);

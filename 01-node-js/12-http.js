const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to our home page");
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});






 //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
 // SWITCH TO IF, ELSE IF, ELSE (BELOW)

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     // console.log(req)
//   if(req.url ==='/'){
//     res.end("Welcome to our home page")
//   }
//   if(req.url === '/about'){
//     res.end('Here is our short history')
//   }
//   res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//   `)
// //   res.write('Welcome to  our home page')
// //   res.end()
// })


// server.listen(5000)



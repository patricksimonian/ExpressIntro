const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


var people = [{
  
  firstName: 'Andrew',
  lastName: 'Jun',
  age: '23'
  
}]


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser)

app.get('/', (req, res) => {
  var html='';
  html += "<form action='/people'  method='post' name='form1'>";
  html += "First Name:<input type= 'text' name='firstName'>";
  html += "</p>Last Name:<input type= 'text' name='lastName'>";
  html += "</p>Age:<input type= 'number' name='age'>";
  html += "<input type='submit' value='submit'>";
  html += "</form>";
  res.send(html)
})

app.get('/health', (req, res) => {
  res.send('Server is healthy')
});

app.get('/people', (req, res) => {
  res.send(JSON.stringify(people))
});

app.post('/people', (req, res) => {
  people.push(req.body);
  res.status(200).json(req.body); 
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});




const getCurrentRequest = (path) => ({
  body: null,
});

function getCurrentResponse() {
  return {
    status: number => console.log(number),
    send: msg => console.log(msg),
    json: jsonString => this.send(JSON.stringify(jsonString)),
  }
};

const get = (path, resReqCb) => {
  const request = getCurrentRequest(path);
  const response = getCurrentResponse();

  resReqCb(request, response);
}


get('/foo', (req, res) => {
  res.send('HELLO WORLD');
});


// nodemon
// prettier
// express.Router
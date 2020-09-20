# trim-middleware

A **Simple** Middleware that automatically trim the body of requests
## Installation
Run this command:
```
npm install --save trim-middleware
```

## Prerequisite
You must have [express](https://www.npmjs.com/package/express) and [body-parser](https://www.npmjs.com/package/body-parser) in your app like this:
```
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const trimMiddleware= require('trim-middleware')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(trimMiddleware());
```
## Test it
Run this code after install [express](https://www.npmjs.com/package/express), [body-parser](https://www.npmjs.com/package/body-parser) and [trim-middleware](https://www.npmjs.com/package/trim-middleware): 

```
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const trimMiddleware= require('trim-middleware')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(trimMiddleware());

app.post('/test', (req, res) => {
  console.log(req.body)
  // or
  res.json(req.body)
});

app.listen(3000);
```
And with postman make the request with this body: 
![Request](https://i.ibb.co/xs58gjY/Capture-d-e-cran-2020-09-19-a-17-34-28.png)

**Don't forget the withespaces**

And in terminal:

![Response](https://i.ibb.co/fdqgd36/Capture-d-e-cran-2020-09-19-a-17-38-53.png)

It's useful for public app for password, pseudo and other.
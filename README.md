# Application for an insurance company
An application that act as middleware to get clients and policies data from an api and pass it to the client.

## API
| Endpoint   |      Type      |      Body      |  Description |
|------------|:--------------:|:--------------:|-------------:|
| `/login` |  POST | `{username: "dare", password: "s3cr3t"}` | Sign in to get a token |
| `/clients/{id}` |  GET | none | Get a client info and policies related to him/her  |
| `/clients?name={name}&limit={limit}` |    GET   | none |   Get clients data filtered by user name and a limit(default is 10) |
| `/clients/{id}/policies `|  GET | none | Get the policies related to a client  |
| `/policies?limit={limit}` | GET | none |    Get a list of policies limited by the query param limit (default is 10) |
| `/policies/{id}` | GET | none |    Get the client info attached to a policy id |


This API REST is protected by authentication. You must consume first the POST /login API endpoint to retrieve a token which you can use to call the other API endpoints.

Example of an  http call:
```
POST /login HTTP/1.1
Content-Type: application/json
Host: localhost:3000
Content-Length: 46

{
	"username": "dare",
	"password": "s3cr3t"
}
```
The result of this call will get you a token that you should use in any other api call.



## Clone the project
https://github.com/DonMehdi/poc-api-AxxxA.git

## Access the folder
cd poc-api-AxxxA

### Setup npm
``` shell script
npm install
```

### Start the application
``` 
npm start
```

### Launch tests
``` 
npm run test
```

### API swagger
https://dare-nodejs-assessment.herokuapp.com/assessment-swagger/static/index.html#/ 

## Language used
* Node.js v14.7.0
* Express Framework



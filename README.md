# Simple API Gateway

A simple API Gateway built with Node.js and Express.

## Features

- Routes requests to multiple backend services.
- Uses `http-proxy` for proxying.
- Includes basic error handling.
- Uses `morgan` for request logging.

## Usage

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the gateway: `node server.js`

## Configuration

-   Define routes and their target services in the `server.js` file.


const routes = {
  '/products': 'http://localhost:3001',
  '/users': 'http://localhost:3002',
  '/orders': 'http://localhost:3003',
};


## Dependencies

-   express
-   http-proxy
-   morgan
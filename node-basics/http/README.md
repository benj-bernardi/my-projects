# HTTP Server with Node.js (Native Module)

This folder contains simple examples of how to build HTTP servers using only the native `http` module in Node.js. No frameworks are used.

## Overview

These examples demonstrate:

- Creating a basic HTTP server
- Handling routes using `req.url` and `req.method`
- Sending responses with headers
- Understanding how the Node.js HTTP module works at a low level

The goal is to provide a clear understanding of how the web works internally before moving to frameworks.

## Project Structure

```bash
/http
 ├── server.js
 └── README.md
```

## Requirements

- Node.js 18 or higher

## Running the Server

Use the command:

```bash
node server.js
```

Expected output:

```bash
Server running at http://localhost:3000
```

Then open a browser at:

```
http://localhost:3000
```

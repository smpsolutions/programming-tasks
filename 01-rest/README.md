# 01 - REST Api

Using the skeleton in `01-rest` perform the following changes and additions. Feel free to change and optimize the structure of the project to your liking.

To run the server you are building, use npm:

```shell
npm start
```

## 1. JSON-RPC substraction

Based on JSON-RPC 2.0, add an endpoint `/rpc` that will take in a json-rpc message and handle the method `substract`. You may find some example of rpc messages in the official json-rpc documentation but also create you own edge cases to make sure you substraction algorithm as well as you endpoint behaves properly.

```
--> {"jsonrpc": "2.0", "method": "subtract", "params": [42, 23], "id": 1}
<-- {"jsonrpc": "2.0", "result": 19, "id": 1}

--> {"jsonrpc": "2.0", "method": "subtract", "params": [23, 42], "id": 2}
<-- {"jsonrpc": "2.0", "result": -19, "id": 2}
```

## 2. Unit testing with JEST

The skeleton already includes a test for the initial root and api endpoints. Add the necessary code to test all the endpoints your express server is serving. And try to achieve a reasonable high code coverage (>90%).

Run the tests using

```shell
npm test
npm run coverage
```


**References:**

* <https://www.jsonrpc.org/specification>
* <https://expressjs.com/>

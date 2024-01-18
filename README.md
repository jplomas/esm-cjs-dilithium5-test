# esm-cjs-dilithium5-test

Some intergration tests / examples for [@theqrl/dilithium5](https://www.npmjs.com/package/@theqrl/dilithium5).

Web usage (`web-esm-test` example vue project) needs polyfills for global modules `crypto` & `buffer`.  In the demo this is achieved with the npm package `buffer` and the following portion of the `vite.config.js` file:

```javascript
    global: {},
```

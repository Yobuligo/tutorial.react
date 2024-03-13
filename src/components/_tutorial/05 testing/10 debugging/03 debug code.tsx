/**
 * To debug the code of a test, the following steps have to be executed:
 * 1. Add script to package.json, maybe below script "test": react-scripts --inspect-brk test --runInBand --no-cache 
 *      like "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache",
 * 2. Add debugger statement to the code
 * 3. use test.only or describe.only to limit tests
 * 4. run script
 * 5. navigate to about:inspect in the browser
 */

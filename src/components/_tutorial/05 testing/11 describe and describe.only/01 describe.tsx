/**
 * Describe is a function to group tests.
 * Important is to understand that tests are not executed directly, but they are collected at first.
 * The testing library is doing some magic stuff. It executes code, which is not a test before all tests.
 * That means if I have 2 tests, which needs a test preparation and 2 other, which needs another, we have to use describe, otherwise, both setups would be run at the beginning at the tests would fail.
 *
 * Example
 * firstSetup()
 * test("first test")
 * test("second test")
 *
 * secondSetup()
 * test("third test")
 * test("fourth test")
 *
 * So upper code would be executed as follows
 * firstSetup()
 * secondSetup()
 * test("first test")
 * ...
 *
 * An here we can use describe to group our tests
 */

const setupServer = (setup: string) => {
  console.log("Set up server");
};

describe("start server", () => {
  setupServer("Start Server");
  test("server will be started", () => {});
  test("server is restarted", () => {});
});

describe("close server", () => {
  setupServer("Close Server");
  test("server will be closed", () => {});
  test("server is closed", () => {});
});

// Async and Await is a comfortable way to handle promises
// Promises is a way to handle jobs in parallel without the need of the application to wait the jobs to end.
// E.g. if a REST request is send to a server the client has to wait for the result
// But during this time the application should still be usable.
//
// As there is no multi threading in JavaScript in general (beside by using special frameworks) I assume it is implemented like a Game-Loop-Pattern
// Each job / task get some CPU time to work until it is finished.
// If there is only a job that waits like the setTimeout function then only less CPU time is used. It is only required to check if the timer is over.
// if so the code block of the timer is executed.
// If there is a job that needs more CPU time for calculation this probably means the whole thread is blocked until the calculation is over. This means even so you would have a setTimer for 1000 sec it is only finished if the calc block is finished
// as only then it is checked if the timer is over.

export const AsyncAndAwaitComponent: React.FC = () => {
  return <></>;
};

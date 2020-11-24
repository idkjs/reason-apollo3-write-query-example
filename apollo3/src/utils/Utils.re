module Promise = {
  /**
   Promises in reason-apollo-client never reject, so we're not using catch here.
   Instead we'd add a global uncaught promise handler to report any situations where
   what should be impossible is ocurring.
   */
  let then_ = (promise, f) => Js.Promise.then_(f, promise);
  let ignore: Js.Promise.t(_) => unit = ignore;
};
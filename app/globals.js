Array.prototype.last = function () {
  return this[this.length - 1];
};

global.handleErrors = async response => {
  console.log("I am in Global error handler");
  if (!response.ok) {
    console.log("Global error handler response not ok", !response.ok);
    let body = {};
    try {
      // first see if there is some json in response body
      body = await response.json();
      console.log("I am getting resonse in global error try block", body);
    } catch (e) {
      console.log("I am in catch block of global error", response.status, response.statusText);
      console.log("I am throwing global error in catch block", `${response.status} - ${response.statusText}`);
      // if not then fall back to fetch response status
      throw Error(`${response.status} - ${response.statusText}`);
    }
    console.log("I am throwing error from final throw", body.message, body.error, body.errmsg );
    throw Error(body.message || body.error || body.errmsg || 'Unknown Error');
  }
  return response;
}
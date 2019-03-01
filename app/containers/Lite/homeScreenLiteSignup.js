import React, { Component } from 'react';

class AppLandingLiteSignup extends Component {
render() {
return (
<div>
    <form className="signClass marginTopZero liteSignup width22">
        <input className="marginBottom12"type="text" placeholder="Email address" name="email" required />
        <input className="marginBottom12" type="text" placeholder="Name" name="name" required />
        <input className="marginBottom12" type="text" placeholder="Organisation" name="org" required />
        <button className="marginBottom12" type="submit">REQUEST ACCESS CODE</button>
        <input className="marginBottom12" type="text" placeholder="Access Code" name="acode" required />
        <button className="marginBottom12" type="submit">ENTER</button>
    </form>
</div>
);
}
}

export default AppLandingLiteSignup;
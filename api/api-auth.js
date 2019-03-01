module.exports.signin = function(req, res) {
    if (!req.body.email || !req.body.password) {
      sendJSONresponse(res, 400, { message: 'All fields required' });
      return;
    }
  
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        sendJSONresponse(res, 404, err);
        return;
      }
      if (!user) {
        sendJSONresponse(res, 401, info);
        return;
      }
      if (user.scope === 'TRUSTMARQUE') {
        sendJSONresponse(res, 400, {
          message: 'TRUSTMARQUE scope users may sign in with Office 365 credentials only.'
        });
        return;
      }
  
      let token = user.generateJwt();
      sendJSONresponse(res, 200, { token: token });
    })(req, res);
  };
const Flutter    = require('flutter');
const flutter = new Flutter({
  debug: (msg)=>{ console.log("twi_oauth:", msg); },
  consumerKey: '',
  consumerSecret: '',
  loginCallback: 'https://localhost/twitter/callback',
  authCallback: (req, res, next)=>{
    if (req.error){
      console.error("Authentication failed, req.error contains details");
      console.error(req.error);
      return;
    }
    const accessToken = req.session.oauthAccessToken;
    const secret = req.session.oauthAccessTokenSecret;
    // Store away oauth credentials here
    // Redirect user back to your app
    res.redirect('/twitter/callback');
  }
});

exports.flutter = flutter;

const home = require('./controllers/home');
const user = require('./controllers/user');
const wx = require('./controllers/wx');

module.exports = (app) => {

  // home page
  app.get('/', home.index);

  // user related
  app.get('/user', user.index);


  // BRV Weixin Mini Program
  app.get('/wx/getalltags', wx.getAllTags);
};

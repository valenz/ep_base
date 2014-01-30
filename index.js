var eejs = require('ep_etherpad-lite/node/eejs');

exports.registerRoute = function (hook_name, args, cb) {
  args.app.get('/admin/managepads', function(req, res) {
    
    var render_args = {
      errors: []
    };
    res.send( eejs.require("ep_adminpads/templates/admin/pads.html", render_args) );
  });
};

/*exports.expressCreateServer = function(hook_name, args, cb) {
    args.app.get('/apples', function(req, res) {
        res.send("<em>Abra Cadabra!</em>");
    });
}*/
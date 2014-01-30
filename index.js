var eejs = require('ep_etherpad-lite/node/eejs');

exports.registerRoute = function (hook_name, args, cb) {
    args.app.get('/admin/managepads', function(req, res) {
    
        var render_args = {
            errors: []
        };
        res.send( eejs.require("ep_managepads/templates/admin/managepads.html", render_args) );
    });
};

exports.eejsBlock_adminMenu = function (hook_name, args, cb) {
    var hasAdminUrlPrefix = (args.content.indexOf('<a href="admin/') != -1)
    , hasOneDirDown = (args.content.indexOf('<a href="../') != -1)
    , hasTwoDirDown = (args.content.indexOf('<a href="../../') != -1)
    , urlPrefix = hasAdminUrlPrefix ? "admin/" : hasTwoDirDown ? "../../" : hasOneDirDown ? "../" : ""
    ;
    
    args.content = args.content + '<li><a href="'+ urlPrefix +'managepads">Pad administration</a> </li>';
    return cb();
};
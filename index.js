exports.expressCreateServer = function(hook_name, args, cb) {
    args.app.get('/apples', function(req, res) {
        res.send("<em>Abra Cadabra!</em>");
    });
}

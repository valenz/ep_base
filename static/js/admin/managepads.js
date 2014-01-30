exports.documentReady = function(hooks, context, cb) {
    console.log('before'+context);
    if(context != 'admin/managepads') return cb;
    console.log('after'+context);
    
    var socket,
    loc = document.location,
    port = loc.port == "" ? (loc.protocol == "https:" ? 443 : 80) : loc.port,
    url = loc.protocol + "//" + loc.hostname + ":" + port + "/",
    pathComponents = location.pathname.split('/'),
    // Strip admin/plugins
    baseURL = pathComponents.slice(0,pathComponents.length-2).join('/') + '/',
    resource = baseURL.substring(1) + "socket.io";
    
    //connect
    socket = io.connect(url, {resource : resource}).of("/pluginfw/admin/managepads");
}

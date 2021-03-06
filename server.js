'use strict';
//=============================================================================
/**
 * module dependencies
 */
//=============================================================================
const
    http = require('http'),
    app = require('./app');
//=============================================================================
/**
 * HTTP server instance
 */
//=============================================================================
const server = http.createServer(app);
//=============================================================================
/**
 * Module variables
 */
//=============================================================================
const
    port = app.get('port'),
    env = app.get('env');
//=============================================================================
/**
 * Bind to port
 */
//=============================================================================
server.listen(port, () => {
    return console.log('Server up on %d in %s mode', port, env);
});
//=============================================================================
/**
 * Conditionally export module
 */
//=============================================================================
if(require.main != module) {
    module.exports = server;
}
//=============================================================================

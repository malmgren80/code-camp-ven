/**
 * Module dependencies.
 */
var express = require( 'express' ),
	app = express(),
    http = require( 'http' ),
    path = require( 'path' );

// all environments
app.set( 'port', process.env.PORT || 1337 );
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'jade' );
app.use( express.favicon() );
app.use( express.logger( 'dev' ) );
app.use( express.bodyParser() );
app.use( express.methodOverride() );
console.log(__dirname);
app.use( '/public', express.static( path.join( __dirname, 'public') ) );
app.use( app.router );

// development only
if ( 'development' === app.get('env') ) {
  app.use( express.errorHandler() );
}

http.createServer( app ).listen( app.get( 'port' ), function() {
  console.log( 'Express server listening on port ' + app.get( 'port' ) );
});

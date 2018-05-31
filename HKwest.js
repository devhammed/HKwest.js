/** HKwest | AJAX/HTTP/CORS Library
 * @author Oyedele Hammed Horlah
 * @see http://www.github.com/devHammed/HKwest.js
 * @description HKwest is a simple and minimalist AJAX, HTTP Requests and CORS Request Javascript Library.
 * @since October 8, 2017
 * @version 2.0
*/
function HKwest( opt ) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new XDomainRequest(),
    serialize = function ( obj ) {
      if ( typeof obj !== 'object' ) return obj;
        var res = [];
        for ( var key in obj )
          res.push( key + '=' + encodeURIComponent( obj[ key ] ) );
        return res.join( '&' );
    },
    type = (opt.contentType) ? opt.contentType : 'application/www-form-url-encoded';
  xhr.open( opt.type || 'GET', opt.url, true );
  xhr.withCredentials = true;
  xhr.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' );
  if ( opt.headers ) {
    for ( var header in opt.headers )
      xhr.setRequestHeader( header, opt.headers[ header ] );
  }
  xhr.setRequestHeader( 'Content-type', type );
  if ( opt.mime )
    xhr.overrideMimeType( opt.mime );
  if ( opt.returnType )
    xhr.responseType = opt.returnType;
  if ( opt.auth )
    xhr.setRequestHeader( 'Authorization', 'Basic ' + btoa( opt.auth ) );
  xhr.onload = function () {
    if ( xhr.readyState != 4 ) return;
    opt.done && opt.done( xhr );
  }
  xhr.send( serialize( opt.data ) || null );
}
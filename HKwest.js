/* HKwest AJAX/HTTP/CORS Library
 * Author: Oyedele Hammed Horlah
 * URL: http://www.oyedelehammed.ml/HKwest.html
 * Description: HKwest is a simple and minimalist AJAX, HTTP Requests and CORS Request Javascript Library.
 * Release Date: October 8, 2017
 * Version: 1.0
*/

window.HKwest = function (opt) {
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new XDomainRequest();
var parse = function (obj) {
if (typeof obj == 'object') {
var res = [];
for (var key in obj) res.push(key + '=' + encodeURIComponent(obj[key]));
return res.join('&');
  } else {
return obj;
  }
}
xhr.open(opt.type || 'GET', opt.url, true);
xhr.withCredentials = true;
xhr.setRequestHeader('X-Requested-With', "XMLHttpRequest");
if (opt.headers) {
for (var h in opt.headers) xhr.setRequestHeader(h, opt.headers[h]);
}
var type = (opt.contentType) ? opt.contentType : 'application/www-form-url-encoded';
xhr.setRequestHeader('Content-type', type);
if (opt.mime) xhr.overrideMimeType(opt.mime);
if (opt.returnType) xhr.responseType = opt.returnType;
if (opt.auth) xhr.setRequestHeader('Authorization', "Basic " + btoa(opt.auth));
xhr.onload = function () {
if (xhr.readyState != 4) return;
if (opt.done) {
opt.done(xhr);
} else {
console.log(xhr.response);
  }
}
xhr.send(parse(opt.data) || null);
}
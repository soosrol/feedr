$.ready(isRedirectedURI())
function isRedirectedURI() {

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "7d82bb2272964cb69a82487397c33b47"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


} //fn - isRedirectedURI

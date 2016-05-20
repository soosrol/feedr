$.ready(getArticles())


function getArticles(query, filter, beginDate, endDate, highlight, page) {

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	//always append api key
	var params = new Object();
	params['api-key'] = "9c3ec182f19a487281b19d0759aaea21";
	//maybe append 'fl' parameter to limit returned fields and improve speed?


	//append params if they are present
	if (query) params.q = query
	if (filter) params.fq = filter
	if (beginDate) params.begin_date = beginDate
	if (endDate) params.end_date = endDate
	if (highlight) params.hl = highlight
	if (page) params.page = page

	//construct url
	url += '?' + $.param(params);

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  updatePage(result); // call the page update function here
	}).fail(function(err) {
	  throw err;
	});
} 

function updatePage(result){
	console.log(result);
}
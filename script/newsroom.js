var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");

var target = queries[0].split("=");

var selectedNews = 0;

if(target[0] == 'post'){
  selectedNews = target[1];
}

if(selectedNews != 0){
  $(".news-container").css("opacity","1");
}

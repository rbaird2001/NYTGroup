

 //TODO add parameters from input to search query
    var search = 'sports';
    var apiKey = '&api-key=VZVwYWeMnAD6JAmJgR1tbVBrPV3L9rGl';
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + apiKey;
    var nytData ; //TODO remove testing 


   $.ajax({
       url: queryURL,
       method: "GET"
   }).then(function(articles) {
       nytData = articles.response.docs //TODO Remove after testing.
    //    console.log(articles.response.docs[0].section_name);
    //    console.log(articles.response.docs[0].snippet);
    //    console.log(articles.response.docs[0].web_url);

     for(i=0; i<nytData.length; i++ ){
        var nytArt = articles.response.docs[i];
        var resultsDiv = $("<div>").attr("data-articleNum",i)
        var resultsHead = $("<h5>").text(nytArt.headline.main);
        var resultsDate = $("<p>").text(nytArt.pub_date);
        var resultsAbstract = $("<p>").html(nytArt.abstract) ;
        var resultsUrl = $("<p>").append($("<a>").attr("href",nytArt.web_url).html(nytArt.web_url));
        resultsDiv.append(resultsHead);
        resultsDiv.append(resultsAbstract);
        resultsDiv.append(resultsUrl);
        resultsDiv.append(resultsDate);
        resultsDiv.append("<hr>");
        $("#results").append(resultsDiv)
     }
    
   });



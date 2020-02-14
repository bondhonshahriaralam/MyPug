const express = require('express');
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a40c7cc9c7dc410282c10172b6ce02de');
app.set('view engine', 'pug');

newsapi.v2.topHeadlines({
  sources:"",
  q: '',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  app.get('https://mypug.herokuapp.com', function(req, res){
    res.render('index',{title: JSON.stringify(response["totalResults"]), paragraf: JSON.stringify(response)})
});
});
app.listen(3000);

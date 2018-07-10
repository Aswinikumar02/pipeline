var google=require('google');
var https=require("https");
var url="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyCrw-jS-hFCyt3eao_HZTjVklDJpuzJx6A";
var request=https.get(url,function(response)
{
  response.on("data",function(chunk)
  {
   console.log(JSON.parse(chunk));
  });
});

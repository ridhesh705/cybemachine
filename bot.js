var twit = require("twit");
var config = require("./config");
var t = new twit(config);



var stream = t.stream('statuses/filter', { track: ['@cybemchine'] });
stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {

    // Who sent the tweet?
    var name = tweet.user.screen_name;
    // What is the text?
  
  
  
  
    var txt = tweet.text;
  console.log(txt)
  
  var res = txt.slice(0, 12);
 console.log(res) 

 
  
  
  
  
  
  if (res = '@cybemchine'){
    
    console.log(res)
  } 
  
    
  
    var nameID  = tweet.id_str;


    var reply = "You mentioned me! @" + name + ' ' + 'You are super cool!';
    var params             = {
                              status: reply,
                              in_reply_to_status_id: nameID
                             };
  //wow
}
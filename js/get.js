/*var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8080/JamBoxAPI/Timeline/shit",
  "method": "GET",
  "headers": {
    "token": "4444",
    "cache-control": "no-cache",
  }
}

$.ajax(settings).done(function (data) {
  //console.log(data);
  for(var key in data){
  	if(data.hasOwnProperty(key)){
  		var parentElement = ".main-content";
  		var prefix = "main-content .main-content-";
  		var newKey = prefix + key;
  		//console.log(key);
  		//console.log(data[key].bandID);
  		//console.log(data[key].url);
  		$(".main-content").append("<div class='col-lg-'><div class='bs-callout bs-callout-"+key+"'><div class='col-md-6 main-content-header'>"+data[key].header+"</div><div class='col-md-4 col-md-offset-2 text-right'>in "+data[key].bandID+"</div><div class='container-fluid main-content-body'>"+data[key].body+"</div></div></div>");
        
        if(key == "Clip"){
        	//console.log("Insert soundcloud here");
			//console.log(data[key].url);
			//var soundcloudID = getSoundCloudEmbed(data[key].url);
			//console.log("Begin soundcloud fetch");
			var trackUrl = data[key].url;
			var Client_ID = '3692a138e8062c0429c4d34cc1522fd0';//you have to register in soundcound developer first in order to get this id 
			$.get(//make an ajax request
			    'http://api.soundcloud.com/resolve?url=' + trackUrl + '&client_id=' + Client_ID, 
			    function (result) {//returns json, we only need id in this case
			    	//console.log("JSON fetched");
			        var trackID = result.id;
			        //console.log(trackID);
			        $(".main-content .bs-callout-Clip .main-content-body").append('<iframe width="100%" height="100px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+trackID+'&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>');

			        //$(".videowrapper, .exhibitions-image, iframe").replaceWith('<iframe width="100%" height="100px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + result.id +'&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=false"></iframe>');//the iframe is copied from soundcloud embed codes
		    });
		}     		
  	}
  }
});

/*

Marvin is gay

*/

function filter_content(toshow, tohide1, tohide2){
	console.log("test");
	var classToShow = ".main-content-" + toshow; //create class selectors
	var classToHide1 = ".main-content-" + tohide1;
	var classToHide2 = ".main-content-" + tohide2;
	var updateMessage = "Showing " + toshow + "s";
	console.log(classToShow);
	console.log(updateMessage);

	$(classToShow).show(150); //show or hide created class selectors
	$(classToHide1).hide(150);
	$(classToHide2).hide(150);

	$(".filter-text mark").text(updateMessage); //update filter text
}

$(".btn-clip").click(function(){
	filter_content("clip","calendar","post");
});

$(".btn-calendar").click(function(){
	filter_content("calendar","clip","post");
});

$(".btn-post").click(function(){
	filter_content("post","calendar","clip");
})

$(".btn-showall").click(function(){
	$(".main-content-clip").show(150);
	$(".main-content-calendar").show(150);
	$(".main-content-post").show(150);
	$(".filter-text mark").text("Showing all");
})

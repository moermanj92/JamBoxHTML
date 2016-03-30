function filter_content(toshow, tohide1, tohide2){
	console.log("test");
	var classToShow = "." + toshow + "-content"; //create class selectors
	var classToHide1 = "." + tohide1 + "-content";
	var classToHide2 = "." + tohide2 + "-content";

	$(classToShow).show(); //show or hide created class selectors
	$(classToHide1).hide();
	$(classToHide2).hide();
};

$(".contactme").click(function(){
	filter_content("contactme", "mybands", "myskills");
});
$(".myskills").click(function(){
	filter_content("myskills", "mybands", "contactme");
});
$(".mybands").click(function(){
	filter_content("mybands", "contactme", "myskills");
});

$(".contactme-content").hide();
$(".mybands-content").hide();
$(".myskills-content").hide();

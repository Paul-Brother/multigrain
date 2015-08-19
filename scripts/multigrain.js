// JavaScript Document


$(function() {

	
	$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});
// validate signup form on keyup and submit

/*		$("#goForm").validate({
			rules: {
				fname: "required",
				lname: "required",
				phone: "required",
				company: "required",
				email: {
					required: true,
					email: true
				},
			messages: {
				fname: "Please enter your firstname",
				lname: "Please enter your lastname",
				email: "Please enter a valid email address",
				phone: "Please enter your phone number",
				company: "Please enter your company name" 
			}}
		});	*/
	

$('.modal').hide();
$('#formDiv').hide();
$('#page2words').hide();
$('#page2pix').hide();
$('#page2write').hide();
$('#page2approve').hide();


//chooBiz at bottom of page 2

$(".chooBiz").click(function(){
	alert('choobiz');
});

$( ".viewInst" ).click(function() {
 $(this).text(function(i, text){
          return text === "hide instructions" ? "show instructions" : "hide instructions";
	});

	
	
//alert($("viewInst").text());
  $( "#page2words" ).toggle( "fast", function() {
    $( "#page2pix" ).toggle( "fast", function() {
      $( "#page2write" ).toggle( "fast", function() {
   $( "#page2approve" ).toggle( "fast", function() {
   });
  });
  });
  });
});
  //alert('good to go');
  var check=1;
  //$( "select" ).change(function() {
	  //checkForm();
	//  if(check==0)return;
	  //var industry= $(this).val();
	  //window.location = "pg2.php?id="+industry;
	 // window.location ="chooseBusiness.php?id="+industry;
 // alert( $(this).val());
//});

var ip;//intro picture

var p1p;//p1 picture

var p2p;//p2 picture

//------------------------
//approve this storyboard!
//at the bottom of page 3, 
//let the visitor save their storyboard
//-----------------------
$("#commentForm").validate({
  submitHandler: function(form) {
    //form.submit();
	
	var introText = ($('#it').text());
	var introImage = $('#intro .image').find('img').attr('src');
	//alert(introImage);
	var introWords = $('#intro .words').text();
	var para1Text = ($('#p1t').text());
	var para1Image = $('#para1 .image').find('img').attr('src');
	var para1Words = $('#para1 .words').text();
	var para2Text = ($('#p2t').text());
	var para2Image = $('#para2 .image').find('img').attr('src');
	var para2Words = $('#para2 .words').text();
	var para3Text = ($('#p3t').text());
	var para3Image = $('#para3 .image').find('img').attr('src');
	var para3Words = $('#para3 .words').text();
	var para4Text = ($('#p4t').text());
	var para4Image = $('#para4 .image').find('img').attr('src');
	var para4Words = $('#para4 .words').text();
	var para5Text = ($('#p5t').text());
	var para5Image = $('#para5 .image').find('img').attr('src');
	var para5Words = $('#para5 .words').text();
	var para6Text = ($('#p6t').text());
	var para6Image = $('#para6 .image').find('img').attr('src');
	var para6Words = $('#para6 .words').text();
	var para7Text = ($('#p7t').text());
	var para7Image = $('#para7 .image').find('img').attr('src');
	var para7Words = $('#para7 .words').text();
	var para8Text = ($('#p8t').text());
	var para8Image = $('#para8 .image').find('img').attr('src');
	var para8Words = $('#para8 .words').text();
	var para9Text = ($('#p9t').text());
	var para9Image = $('#para9 .image').find('img').attr('src');
	var para9Words = $('#para9 .words').text();
	var para10Text = ($('#p10t').text());
	var para10Image = $('#para10 .image').find('img').attr('src');
	var para10Words = $('#para10 .words').text();
	var outroText = ($('#ot').text());
	var outroImage = $('#outro .image').find('img').attr('src');
	var outroWords = $('#outro .words').text();
	var fname =   $("#fname").val();
	var lname = $("#lname").val();
	var phone = $("#phone").val();
	var eml = $("#eml").val();
	var company = $("#company").val();
	var vert = $('#test').text();
	
	var data={
	introText: introText,
	introImage: introImage,
	introWords: introWords,
	para1Text: para1Text,
	para1Image: para1Image,
	para1Words: para1Words,
	para2Text: para2Text,
	para2Image: para2Image,
	para2Words: para2Words,
	para3Text: para3Text,
	para3Image: para3Image,
	para3Words: para3Words,
	para4Text: para4Text,
	para4Image: para4Image,
	para4Words: para4Words,
	para5Text: para5Text,
	para5Image: para5Image,
	para5Words: para5Words,
	para6Text: para6Text,
	para6Image: para6Image,
	para6Words: para6Words,
	para7Text: para7Text,
	para7Image: para7Image,
	para7Words: para7Words,
	para8Text: para8Text,
	para8Image: para8Image,
	para8Words: para8Words,
	para9Text: para9Text,
	para9Image: para9Image,
	para9Words: para9Words,
	para10Text: para10Text,
	para10Image: para10Image,
	para10Words: para10Words,
	outroText: outroText,
	outroImage: outroImage,
	outroWords: outroWords,
	fname: fname,
	lname: lname,
	phone: phone,
	eml: eml,
	company: company,
	vert: vert
};


$.post("../scripts/result.php",data, 
	function(data){
	$('#goForm').fadeOut('slow');
	$('#approve').fadeOut('slow');
	$('.sendForm').fadeOut('slow');
	$('.bottom').html('<h3>Thank You for using our storyboard generator!</h3><br/>We will review your storyboard at the earliest opportunity and send you a link to a printabale version of your storyboard, next steps in the project and pricing.');
	});	
	
  }
 });
	



$('#sendIt').click(function() {


});

//----------------------------------------------approve click
$("#approve").click(function() {

var sectionArt = ['intro','para1','para2','para3','para4','para5','para6','para7','para8','para9','para10','outro'];
var graphics = 'needed';

//alert($('#outro .words').html());

//check if every section has art or logo
	for(i=0; i<sectionArt.length; i++)
	{
	if($('#'+sectionArt[i]).find('img').attr('src')=='../graphics/default.png'
 &&
 $('#'+sectionArt[i]+' .words').text()=="Replace this text with your own illustrative words.") 
	{
		$('#msg').html('Make sure you have a graphic image or logo for your '+sectionArt[i]+' section');
		graphics= 'needed';
		return;
		}
		else
			if($('#'+sectionArt[i]+' .words').text()=="" &&
			$('#'+sectionArt[i]).find('img').attr('src')!='../graphics/default.png'
  ){
			$('#msg').html('Make sure you specify some words for your '+sectionArt[i]+' section');
			return;
			}
			else{
				graphics='gotem'
				};
	};//end of loop to look for default image
	

if(graphics=='gotem'){
	//if none of the default images are being used
	//open modal window containg a form
	$('#msg').html('<h3>Great! Just let us know who to<br/>send the next steps to:</h3>');
}


});//end of approve click function


//first open a modal window where the click is

//var pos = $(this).position();
//$('#goForm').position(pos);
//$('#goForm').css({
////	position:"absolute",
	//top: pos.top -25+"px",
	//left: pos.left}).show();
//});




//------------show form
$("#showForm").click(function() {
	event.preventDefault();
	//alert('show');
	$( "#formDiv" ).fadeIn();
	$( "#if" ).fadeOut();
    // Animation complete.
});

//-----------ok terms
$("#okTerms").click(function() {
	event.preventDefault();
	if($('#checkTerms').is(':checked')){
  //alert("ok terms");
  window.location = 'payment.php';
	}else{
		alert('You must check the checkbox before going to the next section.')}
});

//-----------make payment
$("#makePay").click(function() {
	event.preventDefault();
	
  alert("payment made");
  alert('ok payment');
  alert('opening editor with job data showing')
  window.location = 'startProject.php';
	
});

//picLink
$(".picLink").click(function() {
	alert('clicked');
	event.preventDefault();
	var id = $(this).attr('href');
	//var id='http://www.multigrainstudios.com/';
	var target='target';
	var address;
	alert(id);
	var targetList=['intro','para1','para2','para3','para4','para5','para6','para7','para8','para9','para10','outro'];
	//figure out which paragraph is being clicked
	for(a=0; a<targetList.length; a++){
		if(id.toLowerCase().indexOf(targetList[a])>0)
		{
			target =targetList[a];
		};	
			};
	address = ("http://localhost/multigrain/graphics/"+id);
	alert(address);
	$('#'+target+'Pix').replaceWith('<img class="logo" id='+target+'Pix src='+address+' />');
	ip=id;//set intro picture
	
	
	if(id.indexOf('logo')>=0){
		//alert('using logo');
		address = ("http://localhost/multigrain/upload/"+id);
		$('#introPix').replaceWith('<img class="logo" id="introPix" src='+address+' />');
		ip='logo';
		}
	//set the address and the target div
	//display the correct graphic in the correct spot
		
	
});
		
//click this text link to bring up the text box instead of the graphic box
	$(".altText").click(function() {  
		event.preventDefault();
		var id2 = $(this).attr('href');
		//alert(id2);
		var words ="Replace this text with your own illustrative words.";
		switch(id2){
			case 'introText':
			$('#introPix').replaceWith('<textarea id="introPix" rows="8" cols="20">'+words+'</textarea>');
			
			
			break;
			case 'para1Text':
			$('#para1Pix').replaceWith('<textarea id="para1Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para2Text':
			$('#para2Pix').replaceWith('<textarea id="para2Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para3Text':
			$('#para3Pix').replaceWith('<textarea id="para3Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para4Text':
			$('#para4Pix').replaceWith('<textarea id="para4Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para5Text':
			$('#para5Pix').replaceWith('<textarea id="para5Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para6Text':
			$('#para6Pix').replaceWith('<textarea id="para6Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para7Text':
			$('#para7Pix').replaceWith('<textarea id="para7Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para7Text':
			$('#para7Pix').replaceWith('<textarea id="para7Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para8Text':
			$('#para8Pix').replaceWith('<textarea id="para8Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para9Text':
			$('#para9Pix').replaceWith('<textarea id="para9Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'para10Text':
			$('#para10Pix').replaceWith('<textarea id="para10Pix" rows="8" cols="20">'+words+'</textarea>');
			break;
			case 'outroText':
			$('#outroPix').replaceWith('<textarea id="outroPix" rows="8" cols="20">'+words+'</textarea>');
			break;
			}
			
		
	});
	
	


$(".review").click(function() {

var it = $('#intro').text();
ip = $('#introPix').val();  
var p1 = $('#para1').text();

var p2 = $('#para2').text();

var p3 = $('#para3').text();

var p4 = $('#para4').text();

var p5 = $('#para5').text();
 
var p6 = $('#para6').text();

var p7 = $('#para7').text();

var p8 = $('#para8').text();

var p9 = $('#para9').text();

var p10 = $('#para10').text();

var outro = $('#outro').text();


var data={
	it: it,
	ip: ip,
	p1p:p1p
};
//when the data is posted, do the function



//alert('cycles ='+cycles);


jQuery.post("review.php",data, 
	function(data){
		alert(ip+ it);
	
	
	})
  
  
	
});
//------------------for page 2
$(".biz").click(function() {
	var bix = $(this).attr('id');
	window.location = 'page3.php?biz='+bix;
});

var sectionPic;

$('#accordion li').click(function() {
	var pic = "<img src='../graphics/"+$(this).attr('id')+"'/>";
	$("#"+sectionPic).children('.image').html(pic);
	
	$("#"+sectionPic).children('.words').text("");
	//set the text to blank if they choose a picture
	// do other stuff th hide the counter and 
	// add the words message back in 
	$('#imageListWindow').hide();
	
});


//-----------------set a value for the picture - word, logo or image
//-----------------for each section
var introFinalImage = i;
var para1FinalImage = i;
var para2FinalImage = i;
var para3FinalImage = i;
var para4FinalImage = i;
var para5FinalImage = i;
var para6FinalImage = i;
var para6FinalImage = i;
var para8FinalImage = i;
var para9FinalImage = i;
var para10FinalImage = i;
var outroFinalImage = i;


//-----------------for page 3
var originalText='We are your one-stop headquarters for a complete line of quality tires and auto services. Brake service and inspections, oil changes, heating and air conditioning - any general auto repair work is performed quickly and at a good price. For 15 years at our current location we have provided local drivers with the latest products and high-quality service for all their automotive needs.';

//find the proper words and picture
var i=1;
var finalImage;
$(".showL").click(function() {

	$('#imageListWindow').hide();//hide the picture list
	var w =$(this).closest('.section').children('.words');
	w.slideUp('fast').hide();
	var picked =$(this).closest('.section').children('.image');
	$(this).closest('.section').children('.image').slideDown('fast');
	var pic="<img src='../graphics/default_Logo.png'/>";
	$(this).closest('.section').children('.image').html(pic);
	
	//alert($(this).closest('.section').attr('id'));
});


		
	
$(".showP").click(function() {
	//
	var vert= ($('#test').text());
	var picked =$(this).closest('.section').children('.words');
	var para = $(this).closest('.section').attr('id');
	picked.slideUp('fast').hide();
	$(this).closest('.section').children('.counter').hide();
	$(this).closest('.section').children('.image').slideDown('fast');

	
	sectionPic = $(this).closest('.section').attr('id');
	//alert(sectionPic);
	//first open a modal window where the click is
	var pos = $(this).position();
	$('#imageListWindow').position(pos);
	$('#imageListWindow').css({
		position:"absolute",
		top: pos.top -185+"px",
		left: pos.left}).show();
		});
	//next get the location of this click
	//var pic="<img src='graphics/"+vert+para+"image"+i+".png'/>";

$('.words').keypress(function(e){
	var top = 80
	var len = 0;
	len = $(this).text().length;
  $(this).closest('.section').children('.counter').text(len+1+" characters");
  if(len+1==top){e.preventDefault();;
  e.stopPropagation();
  }
});




$(".showT").click(function() {
	//
	//$(this).css('visibility','hidden')
	$('#imageListWindow').hide();//hide the picture list if it's open
	$(this).closest('.section').children('.image').slideUp('fast').hide();
	//showing words, remove the default image
	$(this).closest('.section').children('.image').find('img').attr('src')=='';
	$(this).closest('.section').children('.words').slideDown('fast');
	$(this).closest('.section').children('.counter').show();

});
var defaultText='Replace this text with your own illustrative words.';
//set the words to blank
$('.words').focus(function(){
	if($(this).text()==defaultText){
		//alert('default');
		$(this).text('')};

});


//resets the section text to the original default text,
//captured when the page loaded
 
$(".reset").click(function() {
	//figure out which one  
	var wi = ($(this).closest('.section').attr('id'));
	//alert(wi);
	switch (wi){
	case 'intro':	
	$(this).closest('.section').children('.text').html(origIntro);
	break;	 
	case 'para1':	
	$(this).closest('.section').children('.text').html(origPara1);
	break;
	case 'para2':	
	$(this).closest('.section').children('.text').html(origPara2);
	break;	
	case 'para3':	
	$(this).closest('.section').children('.text').html(origPara3);
	break;	
	case 'para4':	
	$(this).closest('.section').children('.text').html(origPara4);
	break;	
	case 'para5':	
	$(this).closest('.section').children('.text').html(origPara5);
	break;	
	case 'para6':	
	$(this).closest('.section').children('.text').html(origPara6);
	break;	
	case 'para7':	
	$(this).closest('.section').children('.text').html(origPara7);
	break;	
	case 'para8':	
	$(this).closest('.section').children('.text').html(origPara8);
	break;	
	case 'para9':	
	$(this).closest('.section').children('.text').html(origPara9);
	break;	
	case 'para10':	
	$(this).closest('.section').children('.text').html(origPara10);
	break;	
	case 'outro':	
	$(this).closest('.section').children('.text').html(origOutro);
	break;	
	}
    //        alert(originText);
	




});

var origIntro=($('#intro').children('.text').text());
var origPara1=($('#para1').children('.text').text());
var origPara2=($('#para2').children('.text').text());
var origPara3=($('#para3').children('.text').text());
var origPara4=($('#para4').children('.text').text());
var origPara5=($('#para5').children('.text').text());
var origPara6=($('#para6').children('.text').text());
var origPara7=($('#para7').children('.text').text());
var origPara8=($('#para8').children('.text').text());
var origPara9=($('#para9').children('.text').text());
var origPara10=($('#para10').children('.text').text());
var origOutro=($('#outro').children('.text').text());


});//end of doc ready

function checkForm()
	{
		check =1;
	if($('#name').val() == ""){
	alert('must enter name');
	check = 0;}
	else
	if($('#email').val() == ""){
	alert('must enter email');
	check =0;}
	else
	if($('#phone').val() == ""){
	alert('must enter phone');
	check=0;}	
	};
function validateForm() {
	//alert('submit');
	var biz= $('#vert').val();
	//alert(biz);
	if(biz=='none'){
		alert('you must choose your business from the dropdown menu')
		}
	else
    	{
			$('#startForm').submit();
			};
}



/* input tag*/
var InputTagItemNumber = 0;var InputTagItems  = [];

function addInputTagItem(tag) {
	InputTagItems[InputTagItemNumber]= tag;
	var parent = document.querySelector('.input-tag-content');
	var newTag = '<span id="tagItem'+InputTagItemNumber+'" class="input-tag-item">'+
	tag+'<i onclick="removeInputTagItem('+InputTagItemNumber+');">x</i></span>';
	parent.insertAdjacentHTML('beforeend', newTag);InputTagItemNumber++;
}
function removeInputTagItem(index) {
	var parent = document.querySelector('#tagItem'+index);
	parent.parentNode.removeChild(parent);
	InputTagItems.splice(index,1); 
	InputTagItemNumber--;
	return false;
}
function getInputTagItems(){
	return InputTagItems;
}
document.querySelector('#tag_input').onkeyup = function(e){/*space =32 ,=188 ;=59*/if(e.keyCode == '188'){var tag = this.value.replace(',','');if(tag !=""){addInputTagItem(tag); this.value ='';}
	}
		if(e.keyCode == '190'){
			var tag = this.value.replace(';','');
		if(tag !=""){addInputTagItem(tag);this.value ='';}
	   }
		if(e.keyCode == '32'){/* var tag = this.value.replace(/\s/g, ""); if(tag !="") { 	addInputTagItem(tag); 	this.value =''; }*/
	}
} 

$(function(){

	//NOTIFICATION 
	$('body').append('<div id="notify-box" class="notification-box"></div>');
	$('.clear').click(function(){
	   $(this).parent().fadeOut('slow');
	});

   var toast = 0;
	$('#notify').click(function(){
	 
	  var hash ='<div id="toast'+toast+'"  class="notification is-danger" style="display:none"> '+                             
					  '<button onclick="$(this).parent().hide()" class="clear">x</button>'+
				   ' </p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem</p>'+
				   '</div>';
		  $('#notify-box').append(hash);
		  var cur =$('#toast'+toast);
		  cur.fadeIn('slow', function(){
			  setInterval(function () {
				cur.fadeOut('slow');
			   // $('#notify-box').remove(cur);
				toast--;
			  },10000)
		  });
		  toast++;
	});


	//DROPDOWN 
	$('.dropdown-button').click(function(){
		var $menu= $(this).parent().children(".dropdown-menu");            
		$menu.toggle('fast');
	 });
	 $('.dropdown-content a').click(function(){
		 $(this).closest('.dropdown-menu').toggle('fast');              
	 })

	

	
  });
   //RESPONSIVE TABLES
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('.datagrid').forEach(function(table){
        let labels = Array.from(table.querySelectorAll('th')).map(function(th){
            return th.innerText;
        });
        table.querySelectorAll('td').forEach(function(td,i){
           td.setAttribute('data-label', labels[i%labels.length]);
        });
    });
  });
  
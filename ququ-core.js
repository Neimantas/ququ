/*On loads*/

window.addEventListener('load', function(event){
	//On onload there should be a method to check the screen size and set the required media queries and do calculations for grid
});	

window.addEventListener('resize', function(event){
	
	//On resize the media queries and grid calculations should be recalculated
	width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	resizeItems(width, height);
});	

/* Here goes ideas I could use
	if (typeof args !== 'arguments') {
        console.log('not a string param')
		
		return -1
    }
	
	//Need to add distinction between document events and window events
// theFunction("John", "fireman");
// theFunction.apply(undefined, ["Susan", "school teacher"]);
// theFunction.call(undefined, "Claude", "mathematician");
//function theFunction(name, profession) {
   // console.log("My name is " + name + " and I am a " + profession + ".");
//}
*/

/*Set global vars*/

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

/*Single method calls*/

function form(args) {
  var args = Array.prototype.slice.call(arguments);
  var checkIfElementExists = findElement(args[0]);
  console.log(args)
  
  //Need to check if element exists AND need to check if the css was written correctly
  if(checkIfElementExists[0] != -1) {
	console.log(eval(checkIfElementExists[0]));
	testy = eval(checkIfElementExists[0]);
	loadStyles(args[0], checkIfElementExists[1], args[1]);
  }
}

//We can append head, because css should be read first, but for safe side AND because we dont want to see clutter, we put it near the end of body. 
//head = document.head || document.getElementsByTagName('head')[0],head.appendChild(style);
function loadStyles(targetElement, itemType, sets){
		var setItemType = getItemType(itemType, targetElement); 
		console.log(itemType)
		var css = setItemType + '{' + sets + '}';
		body = document.body || document.getElementsByTagName('body')[0],
		style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
		style.appendChild(document.createTextNode(css));

	body.appendChild(style);
	}
}

function getItemType(itemType, targetElement){
	var string = itemType;
	console.log(string + targetElement)
	
	if(string == 0) {
		return string = '#' + targetElement;
		
	}
	
	if(string == 1) {
		return string = '.' + targetElement;
	}
	
	if(string == 3) {
		var elName = document.getElementsByName(targetElement)[0].tagName
		return string = elName + '[name=' + targetElement + ']'  
	}
	
	else {
		return targetElement;
	}
} 

function findElement(args, indeksas){
	var step1 = document.getElementById(args) == null ? 0 : 1;
	var step2 = document.getElementsByClassName(args).length == 0 ? 0 : 1;
	var step3 = document.getElementsByTagName(args).length == 0 ? 0 : 1;
	var step4 = document.getElementsByName(args).length == 0 ? 0 : 1;
	
	var stepArr = [step1, step2, step3, step4];
	var methodArr = ['getElementById', 'getElementsByName', 'getElementsByTagName', 'getElementsByClassName'];
	
	if(step1 == 0 && step2 == 0 && step3 == 0 && step4 == 0){
		//console.log('no element');
		return -1;
	}
	
	else {
		//console.log('found')
		for(i=0; i < stepArr.length && i < methodArr.length; i++){
			if(stepArr[i] == 1) {
			//console.log('element found')
			var indeksas = stepArr.indexOf(stepArr[i]);
			var argas = "'" + args + "'";
			var stringas = 'document.'+ methodArr[i] + '(' + argas + ')';
			return [stringas, indeksas];
			}
		}
	}
}

function check(){
	console.log('runs')
}

    function addEvent(args){
		var args = Array.prototype.slice.call(arguments);
		var checkIfElementExists = findElement(args[0]);

		if(checkIfElementExists[0] != -1) {
			head = document.head || document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = "text/javascript";
			var buildFunc = 'function() { ' + args[2] + ' }, false';
			buildFunc.replace(/"/g , "'");
			buildFunc.replace(/'/g , '"');
			
			//eval(checkIfElementExists[0]).style.color = 'cyan'
			//console.log(checkIfElementExists[0])
			
			script.text = checkIfElementExists[0] + '.addEventListener(' + "'" + args[1] + "'" + ',' + buildFunc + ')';	
			
			head.appendChild(script)
		}
}

function contain(args){
	var args = Array.prototype.slice.call(arguments);
    var checkIfElementExists = findElement(args[0]);
	
	console.log(checkIfElementExists[1])
	console.log(args[0])
	var setItemType = getItemType(checkIfElementExists[1], args[0])
	console.log(setItemType)
	
	if(checkIfElementExists[0] != -1) {
	//console.log(eval(checkIfElementExists[0]));
	testy = eval(checkIfElementExists[0]);
	
	//var currWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	//var elWidth = currWidth * 0.8;
	
	var css = '@media(min-width:327px){' + setItemType + '{ ' + 'width:' + 327 * 0.90 + 'px; margin: 0 auto' +'}' + '}'  
	//+  '@media(max-width:991px){' + setItemType + '{ ' + 'width:' + 992 * 0.80 + 'px; margin: 0 auto' +'}' + '}'   
	//+ '@media(max-width:567px){' + setItemType + '{ ' + 'width:' + 567 * 0.50 + 'px; margin: 0 auto' +'}' + '}'

//+ '@media(min-width:768px){' + setItemType + '{ ' + 'width:' + 767 * 0.50 + 'px; margin: 0 auto' +'}' + '}'
+ '@media(min-width:567px){' + setItemType + '{ ' + 'width:' + 567 * 0.90 + 'px; margin: 0 auto' +'}' + '}'
+ '@media(min-width:768px){' + setItemType + '{ ' + 'width:' + 768 * 0.90 + 'px; margin: 0 auto' +'}' + '}'
+ '@media(min-width:1200px){' + setItemType + '{ ' + 'width:' + 768 * 0.90 + 'px; margin: 0 auto' +'}' + '}'

//+ '@media(min-width:992px){' + setItemType + '{ ' + 'width:' + 992 * 0.60 + 'px; margin: 0 auto' +'}' + '}'
//+ '@media(min-width:1200px){' + setItemType + '{ ' +  'width:' +  1200 * 0.90 + 'px; margin: 0 auto' +'}' + '}'
//+ '@media(min-width:2000px){' + setItemType + '{ ' +  'width:' +  1200 * 0.70 + 'px; margin: 0 auto' +'}' + '}'
	
	
	body = document.body || document.getElementsByTagName('body')[0],
		style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
		style.appendChild(document.createTextNode(css));
}

	body.appendChild(style);
  }
}

/* Resize control */

function resizeItems(width, height){
	
}

/*Method Chain Calls*/

var temp = '';

var qq = {
	
	get: function(args){
		var checkIfElementExists = findElement(args);
		
		if(checkIfElementExists[0] != -1) {
			temp = args;
			
			return this
		}
	},
	
	form: function(args1){
		var args = [temp, args1];
		console.log(args)
		form.apply(this, args);
		
		return this
	},
	
	addEvent: function(args1, args2){
		console.log('triggs');
		var args = [temp, args1, args2];
		console.log(args)
		addEvent.apply(this, args);
		
		return this
	},
	
	contain: function(){
		var args = [temp];
		contain.apply(this, args);
		
		return this
	}

};


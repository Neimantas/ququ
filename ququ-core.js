/*On loads*/

window.addEventListener('load', function(event){
	//document.getElementsByTagName('body');
	//console.log('running')
	loadStyles();
	
});	



/*Single method calls*/

function style(args) {
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
	//var css = 'h1 { background: red; }',
	
		if(targetElement, itemType, sets != undefined){
		var setItemType = getItemType(itemType, targetElement); 
		console.log(itemType)
		//console.log(setItemType)
		var css = setItemType + '{' + sets + '}';
		//console.log(css);
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

function getItemType(itemType, targetElement){
	var string = itemType;
	console.log(string)
	
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
		console.log('no element');
		return -1;
	}
	
	else {
		console.log('found')
		for(i=0; i < stepArr.length && i < methodArr.length; i++){
			if(stepArr[i] == 1) {
			console.log('element found')
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
	//console.log(args[0], args[1], args[2])
	var checkIfElementExists = findElement(args[0]);
	//console.log(checkIfElementExists)
	if(checkIfElementExists[0] != -1) {
		head = document.head || document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = "text/javascript";
		//script.text = ''
		//var string = testy addEventListener(args[1], function(event){ args[2]  }))
		
		//testy = eval(checkIfElementExists[0]);
		console.log(checkIfElementExists[0])
		//eval(checkIfElementExists[0]).addEventListener('click', function() { console.log('clicked') }, false);
		var buildFunc = 'function() { ' + args[2] + ' }, false )';
		buildFunc.replace(/"/g , "'");
		buildFunc.replace(/'/g , '"');
		console.log(buildFunc, args[1]);
		var temps = eval(checkIfElementExists[0]);
		temps.addEventListener(args[1], function() { console.log('clicked') }, false)
		
		head.appendChild(script)
    }
}

//Need to add distinction between document events and window events


// theFunction("John", "fireman");
// theFunction.apply(undefined, ["Susan", "school teacher"]);
// theFunction.call(undefined, "Claude", "mathematician");

//function theFunction(name, profession) {
   // console.log("My name is " + name + " and I am a " + profession + ".");
//}

/*Method Chain Calls*/

var temp = '';

var qq = {
	
	 // auto:(function(pars) {
		 // console.log('runs');
		 
		 // return this
	 // })(),
	 
	 // jeff: { thomas : 'jones'   },
	
	get: function(args){
		var checkIfElementExists = findElement(args);
		
		if(checkIfElementExists[0] != -1) {
			temp = args;
			
			return this
		}
	},
	
	// style: function(args1, args2){
		// console.log('hey' , args1, args2)
		// var args = [args1, args2];
		// style.apply(this, args);
		
		// return this
	// },
	
	style: function(args){
		//console.log('hey' , args1, args2)
		var args = [temp, args];
		style.apply(this, args);
		
		return this
	},
	
	addEvent: function(args1, args2){
		console.log('triggs');
		var args = [temp, args1, args2];
		console.log(args)
		addEvent.apply(this, args);
		
		return this
	}

};


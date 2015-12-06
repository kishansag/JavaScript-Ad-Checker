var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var esprima = require('esprima');
var estraverse = require('estraverse');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var file = fs.readFileSync("o23OwO5hf1t.js");
var text1="";
var text2= text1.concat(file);
var urlRegex1, urlRegex2, funcnVarRegex, urls;
var urllength=0, funcvarlength=0, urlnum=0;
			
			urlRegex2 = text2.match(/(\/ads?\.(js|php|pl|htm|html|asp|aspx|cgi|css)\??$)/g);
			if(urlRegex2!=null)
				urllength= urlRegex2.length;
			funcnVarRegex = text2.match(/(.*A|ˆa)ds?([A-Z -].*)?$/g);
			if(funcnVarRegex!=null)
				funcvarlength= funcnVarRegex.length;
	/*		urlRegex1 = text2.match(/(\.(com|in))\/ad([szx]?|(vt)?)?[.\/ ?=-]/g);	*/		
			urls= text2.match(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi);
			if(urls!=null)
				urlnum= urls.length;

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

var funcArrayplus = ['document.write',  'document.referrer', , 'document.writeln',  'String.format', 'get', 'push',  'getTime', 'loadScript',  'cookie', 'escape', 'toGMTString',  'attachEvent', 'charAt', 'substring'];
var funcArrayminus= ['isArray', 'makeArray' ,'getMonth','getYear', 'removeClass', 'addClass', 'hasClass', 'createTextNode', 'isFunction' , 'getAttribute' , 'handleObj' ,  'scrollTop', 'preventDefault'];
var funcPlusMap = [];
var funcMinusMap = [];


var i;
for ( i = funcArrayplus.length-1; i >= 0; --i ) {
    funcPlusMap[funcArrayplus[i]] = 0;   //reset the map
}

for (  i = funcArrayminus.length-1; i >= 0; --i ) {
    funcMinusMap[funcArrayminus[i]] = 0;   //reset the map
}

var eventArrayPlus= ['onload', 'onbeforeunload', 'onerror', 'onDOMReady', 'mousemove', 'onmousedown'] ;
var eventArrayMinus= ['onclick', 'onmouseclick', 'onmouseover', 'onunload', 'onmessage', 'onkeyup', 'onkeydown', 'onscroll', 'onblur', 'onfocus', 'onfocusin', 'onfocusout', 'onresize', 'onreadystatechange', 'DOMSubtreeModified', 'DOMContentLoaded']; 

var eventPlusMap= [];
var eventMinusMap= [];


for( i = eventArrayPlus.length-1 ; i>=0 ;--i){eventPlusMap[eventArrayPlus[i]]= 0;}

for( i = eventArrayMinus.length-1; i>=0 ;--i){eventMinusMap[eventArrayMinus[i]]= 0;}

var codestructplus = ['try', 'bitxor', 'shift'];
var codestructminus= ['array', 'throw'];
var codestructPlusMap=[];
var codestructMinusMap=[];

for ( i = codestructplus.length-1; i >= 0; --i ) {
    codestructPlusMap[codestructplus[i]] = 0;   //reset the map
}

for ( i = codestructminus.length-1; i >= 0; --i ) {
    codestructMinusMap[codestructminus[i]] = 0;   //reset the map
}

var evaltimes = 0;
   // Prepare output in JSON format
   response = {
       MyForm : req.body.myscript
   };



	var ast = esprima.parse(file);
	estraverse.traverse(ast, {
  		enter: function(node){
    			if (node.type === 'CallExpression'){
				if(node.callee.name==='isArray')
      					{funcMinusMap[funcArrayminus[0]]++; console.log(funcMinusMap[funcArrayminus[0]]);}
				if(node.callee.name==='makeArray')
      					{funcMinusMap[funcArrayminus[1]]++; console.log(funcMinusMap[funcArrayminus[1]]);}
				if(node.callee.name==='getMonth')
      					{funcMinusMap[funcArrayminus[2]]++; console.log(funcMinusMap[funcArrayminus[2]]);}
				if(node.callee.name==='getYear')
      					{funcMinusMap[funcArrayminus[3]]++; console.log(funcMinusMap[funcArrayminus[3]]);}
				if(node.callee.name==='removeClass')
      					{funcMinusMap[funcArrayminus[4]]++; console.log(funcMinusMap[funcArrayminus[4]]);}
				if(node.callee.name==='addClass')
      					{funcMinusMap[funcArrayminus[5]]++; console.log(funcMinusMap[funcArrayminus[5]]);}
				if(node.callee.name==='hasClass')
      					{funcMinusMap[funcArrayminus[6]]++; console.log(funcMinusMap[funcArrayminus[6]]);}
				if(node.callee.name==='createTextNode')
      					{funcMinusMap[funcArrayminus[7]]++; console.log(funcMinusMap[funcArrayminus[7]]);}
				if(node.callee.name==='isFunction')
      					{funcMinusMap[funcArrayminus[8]]++; console.log(funcMinusMap[funcArrayminus[8]]);}
				if(node.callee.name==='getAttribute')
      					{funcMinusMap[funcArrayminus[9]]++; console.log(funcMinusMap[funcArrayminus[9]]);}
				if(node.callee.name==='handleObj')
      					{funcMinusMap[funcArrayminus[10]]++; console.log(funcMinusMap[funcArrayminus[10]]);}
				if(node.callee.name==='scrollTop')
      					{funcMinusMap[funcArrayminus[11]]++; console.log(funcMinusMap[funcArrayminus[11]]);}
				if(node.callee.name==='preventDefault')
      					{funcMinusMap[funcArrayminus[12]]++; console.log(funcMinusMap[funcArrayminus[12]]);}

				if(node.callee.name==='get')
      					{funcMinusMap[funcArrayplus[4]]++; console.log(funcPlusMap[funcArrayplus[4]]);}
				if(node.callee.name==='push')
      					{funcMinusMap[funcArrayplus[5]]++; console.log(funcPlusMap[funcArrayplus[5]]);}
				if(node.callee.name==='getTime')
      					{funcMinusMap[funcArrayplus[6]]++; console.log(funcPlusMap[funcArrayplus[6]]);}
				if(node.callee.name==='loadScript')
      					{funcMinusMap[funcArrayplus[7]]++; console.log(funcPlusMap[funcArrayplus[7]]);}
				if(node.callee.name==='cookie')
      					{funcMinusMap[funcArrayplus[8]]++; console.log(funcPlusMap[funcArrayplus[8]]);}
				if(node.callee.name==='escape')
      					{funcMinusMap[funcArrayplus[9]]++; console.log(funcPlusMap[funcArrayplus[9]]);}
				if(node.callee.name==='toGMTString')
      					{funcMinusMap[funcArrayplus[10]]++; console.log(funcPlusMap[funcArrayplus[10]]);}
				if(node.callee.name==='attachEvent')
      					{funcMinusMap[funcArrayplus[11]]++; console.log(funcPlusMap[funcArrayplus[11]]);}
				if(node.callee.name==='charAt')
      					{funcMinusMap[funcArrayplus[12]]++; console.log(funcPlusMap[funcArrayplus[12]]);}
				if(node.callee.name==='substring')
      					{funcMinusMap[funcArrayplus[13]]++; console.log(funcPlusMap[funcArrayplus[13]]);}

    				}

			if(node.type==='MemberExpression'){
				if(node.object.name ==='document' && node.property.name ==="write"){
					funcPlusMap[funcArrayplus[0]]++; 
					console.log(funcPlusMap[funcArrayplus[0]]);
				}
				if(node.object.name ==='document' && node.property.name==="referrer"){
					funcPlusMap[funcArrayplus[1]]++; 
					console.log(funcPlusMap[funcArrayplus[1]]);
				}
				if(node.object.name ==='document' && node.property.name ==="writeln"){
					funcPlusMap[funcArrayplus[2]]++; 
					console.log(funcPlusMap[funcArrayplus[2]]);
				}
				if(node.object.name ==='String' && node.property.name==="format"){
					funcPlusMap[funcArrayplus[3]]++; 
					console.log(funcPlusMap[funcArrayplus[3]]);
				}


			}

			if(node.type==='TryStatement')
				{codestructPlusMap[codestructplus[0]]++; console.log(codestructPlusMap[codestructplus[0]]);}
			if(node.type==='BinaryExpression' && node.operator==='^')
				{codestructPlusMap[codestructplus[1]]++; console.log(codestructPlusMap[codestructplus[1]]);}
			if(node.type==='MemberExpression'){
				if(node.property.name==='shift'){
					codestructPlusMap[codestructplus[1]]++; 
					console.log(codestructPlusMap[codestructplus[1]]);
				}
			}

			if(node.type==='ThrowStatement')
				{codestructMinusMap[codestructminus[0]]++; console.log(codestructMinusMap[codestructminus[0]]);}
			if(node.type==='ArrayStatement')
				{codestructMinusMap[codestructminus[1]]++; console.log(codestructMinusMap[codestructminus[1]]);}
			

			if(node.type==='MemberExpression'){
				if(node.property.name==='onload'){
					eventPlusMap[eventArrayPlus[0]]++;
					console.log(eventPlusMap[eventArrayPlus[0]]);
				}
				if(node.property.name==='onbeforeunload'){
					eventPlusMap[eventArrayPlus[1]]++;
					console.log(eventPlusMap[eventArrayPlus[1]]);
				}
				if(node.property.name==='onerror'){
					eventPlusMap[eventArrayPlus[2]]++;
					console.log(eventPlusMap[eventArrayPlus[2]]);
				}
				if(node.property.name==='onDOMReady'){
					eventPlusMap[eventArrayPlus[3]]++;
					console.log(eventPlusMap[eventArrayPlus[3]]);
				}
				if(node.property.name==='mousemove'){
					eventPlusMap[eventArrayPlus[4]]++;
					console.log(eventPlusMap[eventArrayPlus[4]]);
				}
				if(node.property.name==='onmousedown'){
					eventPlusMap[eventArrayPlus[5]]++;
					console.log(eventPlusMap[eventArrayPlus[5]]);
				}

				if(node.property.name==='onclick'){
					eventMinusMap[eventArrayMinus[0]]++;
					console.log(eventMinusMap[eventArrayMinus[0]]);
				}
				if(node.property.name==='onmouseout'){
					eventMinusMap[eventArrayMinus[1]]++;
					console.log(eventMinusMap[eventArrayMinus[1]]);
				}
				if(node.property.name==='onmouseover'){
					eventMinusMap[eventArrayMinus[2]]++;
					console.log(eventMinusMap[eventArrayMinus[2]]);
				}
				if(node.property.name==='onunload'){
					eventMinusMap[eventArrayMinus[3]]++;
					console.log(eventMinusMap[eventArrayMinus[3]]);
				}
				if(node.property.name==='onmessage'){
					eventMinusMap[eventArrayMinus[4]]++;
					console.log(eventMinusMap[eventArrayMinus[4]]);
				}
				if(node.property.name==='onkeyup'){
					eventMinusMap[eventArrayMinus[5]]++;
					console.log(eventMinusMap[eventArrayMinus[5]]);
				}
				if(node.property.name==='onkeydown'){
					eventMinusMap[eventArrayMinus[6]]++;
					console.log(eventMinusMap[eventArrayMinus[6]]);
				}
				if(node.property.name==='onscroll'){
					eventMinusMap[eventArrayMinus[7]]++;
					console.log(eventMinusMap[eventArrayMinus[7]]);
				}
				if(node.property.name==='onblur'){
					eventMinusMap[eventArrayMinus[8]]++;
					console.log(eventMinusMap[eventArrayMinus[8]]);
				}
				if(node.property.name==='onfocus'){
					eventMinusMap[eventArrayMinus[9]]++;
					console.log(eventMinusMap[eventArrayMinus[9]]);
				}
				if(node.property.name==='onfocusin'){
					eventMinusMap[eventArrayMinus[10]]++;
					console.log(eventMinusMap[eventArrayMinus[10]]);
				}
				if(node.property.name==='onfocusout'){
					eventMinusMap[eventArrayMinus[11]]++;
					console.log(eventMinusMap[eventArrayMinus[11]]);
				}
				if(node.property.name==='onresize'){
					eventMinusMap[eventArrayMinus[12]]++;
					console.log(eventMinusMap[eventArrayMinus[12]]);
				}
				if(node.property.name==='onreadystatechange'){
					eventMinusMap[eventArrayMinus[13]]++;
					console.log(eventMinusMap[eventArrayMinus[13]]);
				}
				if(node.property.name==='DOMSubtreeModified'){
					eventMinusMap[eventArrayMinus[14]]++;
					console.log(eventMinusMap[eventArrayMinus[14]]);
				}
				if(node.property.name==='DOMContentLoaded'){
					eventMinusMap[eventArrayMinus[15]]++;
					console.log(eventMinusMap[eventArrayMinus[15]]);
				} 			
			}

			if(node.type==='CallExpression' ){
				if(node.callee.name==='eval'){
					evaltimes++;
					console.log(evaltimes);
				}
			}
		}
	});


//Calculations	
var FuncPlusSum=0;	
for ( i = funcArrayplus.length-1; i >= 0; --i ) {
    FuncPlusSum+=funcPlusMap[funcArrayplus[i]];  
}

var FuncMinusSum=0;
for (  i = funcArrayminus.length-1; i >= 0; --i ) {
    FuncMinusSum+=funcMinusMap[funcArrayminus[i]] ;   
}

var eventPlusSum=0;
var eventMinusSum=0;
for( i = eventArrayPlus.length-1 ; i>=0 ;--i){
	eventPlusSum+=eventPlusMap[eventArrayPlus[i]];
}

for( i = eventArrayMinus.length-1; i>=0 ;--i){
	eventMinusSum+=eventMinusMap[eventArrayMinus[i]];
}

var codestructPlusSum=0, codestructMinusSum=0;
for ( i = codestructplus.length-1; i >= 0; --i ) {
    codestructPlusSum+=codestructPlusMap[codestructplus[i]];   //reset the map
}

for ( i = codestructminus.length-1; i >= 0; --i ) {
    codestructMinusSum+=codestructMinusMap[codestructminus[i]];   //reset the map
}

var resultPlus;

resultPlus = (FuncPlusSum * (63.9-37.9) + eventPlusSum * (22.2-12.2) + evaltimes * (17.4-9.4)+ codestructPlusSum*(23.9-13.6) + urllength*(67) + funcvarlength*(53.8) + urlnum*(76.1-41.5));
if(resultPlus>0){
	resultPlus= resultPlus/(FuncPlusSum+eventPlusSum+evaltimes+codestructPlusSum+urlnum) ;
} 

var resultMinus = (FuncMinusSum * (38.6-20.0) + eventMinusSum * (21.0-13.4) + codestructMinusSum*(40.2-23.9));
if(resultMinus>0){
	resultMinus= resultMinus/(FuncMinusSum + eventMinusSum + codestructMinusSum) ;
}

var result= resultPlus - resultMinus;
if(result > 0){
	console.log("This is an ad-script")
	console.log(result);
}
else {
	console.log("This is not an ad-script");
	console.log(result);
}
//   console.log(JSON.stringify(ast, null, 4));
   res.end("<p>"+JSON.stringify(ast, null, 4)+"</p>");
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

})

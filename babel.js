require('babel-core/register');
//require("babel-core").transform(es5Code, options)
var count = 0;
const ps1 = "fg2[a]3[b]fdgdf2[c]2[c2[c2[c2[c2[c2[c2[c2[c2[c2[c]]]]]]]]]]2[d]2[w]asdas4[k]";
const ps2 = "aaasa2[aasd]sdsd3[bc]sadasd";
const ps3 = "xxx2[xxa2[b]yy2[c]yy]ff2[d]xx";
const ps4 = "2[a2[b]y2[c]]";
const args = process.argv;

var ciag = args[2] ? args[2] : ps4;

console.log(`Spakowane dane: ${ciag}\n`);

function foreach(fn) {
    var arr = this;
    var len = arr.length;
    for(let i=0; i<len; ++i) {
        fn(arr[i], i);
    }
}

Object.defineProperty(Array.prototype, 'optForEach', {
    enumerable: false,
    value: foreach
});


var algo = (string) => {
   var pattern = /(\d+\[)[a-zA-Z$]+(\])/ig
   var arr = string.match(pattern);
   if(arr){
	   count++;
	   arr.optForEach((val,index) =>{
			var rep = ""
			var num = val.match(/[\d]+/ig);
			var text = val.match(/[a-zA-Z]+/ig);
			rep = (text.toString()).repeat(num);
			string = string.replace(val, rep);
		});
   }

  console.log(`Krok: ${count}`)
  console.log(`Wyszukane wzorce: ${arr}`);
  console.log(`Rozpakowany string: ${string}`);

  if(string.match(pattern)){
		algo(string);
  }else{
	  console.log(`\nWynik: ${string}`);
  }
}

algo(ciag)

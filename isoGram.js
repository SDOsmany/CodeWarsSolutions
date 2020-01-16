function isIsogram(str){

if(typeof str==='undefined'){
return true;}
str=str.toLowerCase();
var strArr = str;
for (var i = 0; i < strArr.length; i++) {
    for (var j = 1; j <= strArr.length; j++) {
        if(i!=j){
          if (strArr[i] == strArr[j]) {
              return false
          }
        }
    }
}
return true;
}
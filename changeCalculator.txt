var coinCombo = function(cents) {
let changeArr = [0,0,0,0]
while((cents-25)>=0){
changeArr[3]+=1;
cents-=25;
}
while((cents-10)>=0){
changeArr[2]+=1;
cents-=10;
}
while((cents-5)>=0){
changeArr[1]+=1;
cents-=5;
}
while((cents-1)>=0){
changeArr[0]+=1;
cents-=1;
}

return  changeArr;


}
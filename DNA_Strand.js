function DNAStrand(dna){
var str='';
  for(var count=0;count<dna.length;count++){
  if(dna[count]=='A'){
    str+='T';
    }else if(dna[count]=='T'){
    str+='A';
    } else if(dna[count]=='G'){
    str+='C';
    }else{
    str+='G';
    }
  }

return str;
}
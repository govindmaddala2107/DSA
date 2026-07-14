const TOH = (n,src,dest,aux)=>{
    if (n==1){
        console.log(`${src} ==> ${dest}`);
    }else{
        TOH(n-1,src,aux,dest);
        console.log(`${src} ==> ${dest}`);
        TOH(n-1,aux,dest,src)
    }
}

var A = "src";
var B = "dest";
var C = "aux";

TOH(5,A,B,C)
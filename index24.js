setTimeout(myfunction,1000);
function myfunction(){
    let d=new Date();
    document.getElementById("demo").innerHTML=
    d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
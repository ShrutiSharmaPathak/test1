//debugger;
/*var counter=0;
function showCounter()
{   
     document.getElementById("span").innerHTML=counter;
}
function incre()
{
    actionType='INC';
  
   counterReducer(actionType,counter);
    
}
function decre()
{
    actionType='DEC';
   
   counterReducer(actionType,counter);

}

function counterReducer(actionType, countValue)
{
    if(actionType=='INC')
    {
    counter=countValue++;
    alert("countValue++"+countValue++);
 alert("value of counter in counter reducer"+counter) ;   
}
else if (actionType=='DEC')
{
    counter=countValue--;
    alert("countValue--****"+countValue--);
 alert("value of counter in counter reducer"+counter) ;  
}
console.log("counter"+counter);
//showCounter();


}*/
/*var counter=0;
function showCounter()
{   
    
     document.getElementById("span").innerHTML=counter;
}
function incre()
{      
    counterReducer("INC",counter++);
}
function decre()
{
    counterReducer("DEC",counter--);
}
function counterReducer(actionType,counter)
{
    showCounter();
}*/
debugger;
var counter=0;
var anothercounter=0;
function showCounter()
{     
     document.getElementById("span").innerHTML=counter;
}

function incre()
{
    
    anothercounter++;
    console.log("anothercounter"+anothercounter);
    actionType='INC';
    document.getElementById("span").innerHTML=counterReducer(actionType,counter);
}
function decre()
{
    anothercounter--;
    console.log("anothercounter in decre"+anothercounter)
    actionType='DEC';
    document.getElementById("span").innerHTML=counterReducer(actionType,counter);
}
function counterReducer(actionType,counter)
{
    if (actionType=='INC')
    counter++;
    else if(actionType=='DEC')
    counter--;
    return counter;
}
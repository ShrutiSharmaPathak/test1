
var counter=0; //global variabal variable counter
function showCounter() //function to show the counter value on load
{     
     document.getElementById("span").innerHTML=counter;
}

function incre() //function to be called on click of the increment button
{
    actionType='INC';
    document.getElementById("span").innerHTML=counterReducer(actionType,counter)+" incrementing the number"; //calling the counterReducer function
                                                                                  // with value of actiontype and global variable counter
}
function decre() //function to be called on click of the decrement button
{
    actionType='DEC';
    document.getElementById("span").innerHTML=counterReducer(actionType,counter)+" decrementing the number"; //calling the counterReducer function 
                                                                                  //with value of actiontype and global variable counter                          
}
function counterReducer(actionType,count) //function counteReducer with parameters actiontype and count.Here the count is local variable to counterReducer function
{
    if (actionType=='INC')
   return counter=count+1;
    else if(actionType=='DEC')
    return counter=count-1; //returning the updated value of the counter based on the actiontype
    
}
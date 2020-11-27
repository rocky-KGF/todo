var todo=[];
var cnt=0;
var flag=0;
var i;
const check="fa fa-check-circle";
const uncheck="fa fa-circle";
document.querySelector(".list").addEventListener("click",function(event){
    const ele=event.target;
    const test=ele.attributes.class.value;
    if(test=="fa fa-trash-alt")
    ele.parentNode.style.display="none";
    else if(test=="fa fa-circle"){
        console.log(test);
        ele.classList.value=check;
        ele.parentNode.children[1].attributes.class.value="line_through";
    }else if(test=="fa fa-check-circle"){
        ele.classList.value=uncheck;
        ele.parentNode.children[1].attributes.class.value="";
    }else{
        console.log(ele);
    }
});


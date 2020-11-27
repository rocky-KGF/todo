document.querySelector(".new").addEventListener("click",function(){
    console.log(screen.width)
    if(screen.width<768){
        console.log(screen.width)
    document.querySelector(".right").style.display="unset"
    document.querySelector(".forms").style.display="unset"
    }else{
    document.querySelector(".right").style.display="flex"
    document.querySelector(".forms").style.display="flex"
    }
    document.querySelector(".signin").style.display="none"
    document.querySelector(".or").style.display="none"
    document.querySelector(".logos").style.display="none"
    document.querySelector(".n").style.display="none"
    document.querySelector(".register").style.display="block"
    document.querySelector(".l").style.display="block"
    document.querySelector(".head").innerHTML="Welcome To YOUR TODO, Register Here!"
})
document.querySelector(".ll").addEventListener("click",function(){
    document.querySelector(".right").style.display="flex"
    document.querySelector(".forms").style.display="flex"
    document.querySelector(".signin").style.display="inline-block"
    document.querySelector(".or").style.display="flex"
    document.querySelector(".logos").style.display="flex"
    document.querySelector(".n").style.display="inline-block"
    document.querySelector(".register").style.display="none"
    document.querySelector(".l").style.display="none"
    document.querySelector(".head").innerHTML="Login To YOUR TODO"
})
document.querySelector(".ab").addEventListener("click",function(){
    var v = document.querySelector(".ei").value;
    v.trim()
    if(v!=""){
        var t = document.querySelector(".edu").innerHTML
        t=t+v+"<br>"
        document.querySelector(".edu").innerHTML=t
        document.querySelector(".ei").value=""
    }
})

document.querySelector(".ee").addEventListener("click",function(){
    var iname = document.querySelector(".in").value;
    var year = document.querySelector(".ac").value;
    iname.trim()
    year.trim()
    if(iname!="" && year!=""){
        var t = `<p><b>${iname}</b></p>
                 <p>${year}<p><br><hr>`
        document.querySelector(".iii").insertAdjacentHTML("beforeend",t)
        document.querySelector(".in").value=""
        document.querySelector(".ac").value=""
    }
})
document.querySelector(".job").addEventListener("click",function(){
    var cname = document.querySelector(".cn").value;
    var pos = document.querySelector(".po").value;
    var y = document.querySelector(".dur").value;
    cname.trim()
    y.trim()
    pos.trim()
    if(cname!="" && y!="" && pos!=""){
        var t = `<p><b>${cname}</b></p>
                 <p>${pos}<p><p>${y}</p><br><hr>`
        document.querySelector(".jjj").insertAdjacentHTML("beforeend",t)
        document.querySelector(".cn").value=""
        document.querySelector(".po").value=""
        document.querySelector(".dur").value=""
    }
})

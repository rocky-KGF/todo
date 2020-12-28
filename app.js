const express = require("express")
const bodyParser=require("body-parser")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bsk123:U2hK4TZuXgvjzXw@cluster0.i0cdc.mongodb.net/bskTODO",{useNewUrlParser:true,useUnifiedTopology:true})

const app = express()
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended : true}))

let options = {
    dotfiles : "ignore"
}
app.use(express.static("public",options))

const todoSchema = mongoose.Schema({
    username : String,
    todo : Array
})

const userSchema=mongoose.Schema({
    name : String,
    username: String,
    password: String,
    Email: String 
})

console.log("directory is  " + __dirname)

const td = mongoose.model("todo",todoSchema)
const user = mongoose.model("user",userSchema)

var items = []
var un=""
var uname =""

app.get("/",function(req,res){
    res.sendFile(__dirname+"/views/user.html")
})

app.get("/:type",function(req,res){
    if(req.params.type=="signin"){
        td.findOne({username : un},function(err,result){
          //  console.log("display "  +result)
            if(result==null)
            res.redirect("/")
            else{
            items=result.todo
            res.render('index',{items: result.todo,user : uname})
            }
        })
    }else if(req.params.type=="logout"){
        un=""
        res.redirect("/")
       // mongoose.connection.close()
    }else{
            var i
            for(i=0;i<items.length;i++)
            {
                //console.log(i + " " + items[i] + " splice strted")
                if(items[i]==req.params.type){
                   // console.log("spliced")
                    var spliced = items.splice(i,1)
                    break
                }
            }
            td.updateOne({username : un},{todo : items},function(err){
                if(err)
                console.log(err)
                else{
              //  console.log("deleted")
                res.redirect("/signin")
                }
               // mongoose.connection.close()
            })
    }
})

app.post("/:type",function(req,res){
    if(req.params.type=="register"){
        var name = req.body.fn + " " + req.body.sn 
        var username = req.body.un 
        var password = req.body.ps 
        var email = req.body.em
        const client = new user({
            name : name,
            username : username,
            password : password,
            Email : email
        })
        const stdo = new td({
            username : username,
            todo : []
        }) 
        client.save()
        stdo.save()
        res.redirect("/") 
    }else if(req.params.type=="signin"){
        un = req.body.un 
        var ps = req.body.ps 
        //console.log("user " + un + " pass " + ps)
        user.findOne({username : un},function(err,result){
            if(result==null){
            res.redirect("/")
            }else{
                uname = result.name
                if(result.password==ps){
                    res.redirect("/signin")
                }
                else
                res.redirect("/")
            }
        })
    }else if(req.params.type=="add"){
        //console.log("un " + un + " name " + uname)
        if(req.body.matter==""){
            res.redirect("/signin")
        }else{
            td.findOne({username : un},function(err,fromDB){
                if(err)
                console.log(err)
                else{
                   // console.log("res" + res)
                    items=fromDB.todo
                    items.push(req.body.matter.trim())
                    td.updateOne({username : un},{todo : items},function(err){
                        if(err)
                        console.log(err)
                        else{
                            res.redirect("/signin")
                        }
                    })
                }
            })
        }
    }
})

let port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server strted at 3000")
})
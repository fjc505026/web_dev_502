
var RegExpPsd= new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^])(?=.{6,12})");///^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^])(?=.{6,12})+$/
var RegExpID=  new RegExp (/^(\d{8})+$/);
var RegExpPhoneNo =  /^(\d{10})+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
var Bool_submit = false; 

function validateFunc() {
    if(Bool_submit){
        alert("The form was submitted");
        Bool_submit=false;
        var userinfo={
           firstName:$("#first_name").val(),
           lastName:$("#last_name").val(),
           staffID:$("#staff_id").val(),
           phoneNo:$("#phone_No").val(),
           email:$("#email").val(),
           qualification:$("#qualification").val(),
           expertise:$("#expertise").val(),
           password:$("#psw2").val(),
        };
        var sample="111";


        $.ajax({           //can not post data, not access right to git hub? access to local file also fail.
        type:'post',
        url:'../JSON/user.json',//https://raw.githubusercontent.com/fjc505026/web_dev_502/master/JSON/user.JSON'
        data:  userinfo,
        dataType: 'json',
        done: done ,
        // sucess: function(newUser){
        //     alert("submit account info success!");
        // },
        // error:function(){
        //     alert("submit account info error!");
        // }
        });
        }    
}

$().ready(function() {
    $("#submit_btn").click(function(){
        if((!$("#first_name").val())&&((!$("#last_name").val())))
             alert("please enter your username");
        else if(!RegExpID.test($("#staff_id").val()))
            alert("please enter correct staff id (8 digital)");   
        else if(!RegExpPhoneNo.test($("#phone_No").val()))
            alert("please enter correct phone number (10 digital)");    
        else if(!(mailformat.test($("#email").val())))
            alert("invalid email address");
        else if($("#qualification").val()==0)
            alert("please select qualification");
        else if($("#expertise").val()==0)
            alert("please select expertise");
        else if(!RegExpPsd.test($("#psw1").val()))
            alert("Password must contain 6-12 length, Contains at least 1 lower case letter, 1 uppercase letter, 1 number and one of following special characters ! @ # $ % ^");
        else if(!$("#psw2").val())
            alert("please re-type the Password");
        else if ($("#psw2").val()!=$("#psw1").val())
             alert("Passwords do not match");    
        else if(!$("#agree").prop('checked'))
            alert("you must agree the terms and conditions");
        else  Bool_submit=true;
    })

})


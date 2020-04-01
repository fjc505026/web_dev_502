var RegExpPsd= new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^])(?=.{6,12})");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  

var defaultEmail="demo@gmail.com";
var defaultpassword="Demo1234@";
var defaultName="Demo";
var AccountValid=false;


$(document).ready(function() {
  //check the account log in for timetable stafflist unitmaster access
  $(".priority").on('click',function () {
    //AccountValid=true;  //for debug
    if(AccountValid){ 
      $("#MasterStaff_hylink").attr("href","html/MasterStaff.html");
      $("#MasterUnit_hylink").attr("href","html/MasterUnits.html");
    }
    else
      alert("please log in your account!")    
  });
  //for log in window, chech the user account validation
  $("#SignIn_btn").click(function(){
    if(!(mailformat.test($("#email0").val())))
        alert("invalid email address");
    else if(!RegExpPsd.test($("#psw0").val()))
        alert("Password must contain 6-12 length, Contains at least 1 lower case letter, 1 uppercase letter, 1 number and one of following special characters ! @ # $ % ^");
    else if (($("#email0").val()==defaultEmail) &&($("#psw0").val()==defaultpassword)){
         alert("log in success");    
         AccountValid=true;
         $("#Logged_banner").text("Hello ("+defaultName+")");
         $(".afterLog").show();
         $(".beforeLog").hide();
    }
    else
        alert("In valid email and password!");
  });

  //for log out use
  $("#lg_outCfm_btn").click(function(){
        AccountValid=false;
        $(".afterLog").hide();
        $(".beforeLog").show();
   });

     
 });
    
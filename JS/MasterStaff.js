
$(function(){
    $.ajax({
      type:'GET',
      dataType: 'json',
      url:'../JSON/staffsample.json',
      success:function(data){
        $.each(data, function(i,staff){
            $("#Staff_body").append("<tr><td>"+staff.Name +"</td><td>"+staff.qualification +"</td><td>"+staff.expertise +"</td><td>"+staff.preferDay+"</td><td>"+staff.consult_time+"</td><td>None</td><td><div class=\"row\"><button class=\"btn btn-warning btn_alloc\" data-toggle=\"modal\" data-target=\"#alloc_modal\">Allocate</button><button class=\"btn btn-danger btn_remv\">Remove</button></div></td></tr>");
        });

     }
    });

    
});

$(function(){
    $.ajax({
      type:'GET',
      dataType: 'json',
      url:'../JSON/testdata.json',
      success:function(data){
        $.each(data, function(i,unit){
            var LecuteTime="<b>Lecture</b> :"+unit.Day+":"+unit.Start+"-"+unit.End;
            var Tut1info="<b>Tutorial</b> :"+unit.Tutorial1.Day+":"+unit.Tutorial1.Start+"-"+unit.Tutorial1.End+" "+unit.Tutorial1.location;
            var Tut2info=unit.Tutorial2.Day+":"+unit.Tutorial2.Start+"-"+unit.Tutorial2.End+" "+unit.Tutorial2.location;

            $("#Unit_body").append("<tr class=\"brief-view\"><td>"+unit.Code +"</td><td>"+unit.Coordinator +"</td><td>"+unit.Lecuter+"</td><td>"+unit.Description+"</td><td><a class=\"text-light\" href=\"UnitEnrollment.html\">"+unit.Campus+"/"+unit.Period+"</a></td></tr> <tr class=\"detail-view\"><td colspan=\"2\">"+LecuteTime+"</td><td colspan=\"3\">"+Tut1info+"/"+Tut1info+"</td></tr>");
        });

        $(".brief-view").click(function(){
           if($(this).next().is(":hidden")) $(this).next().show();
           else $(this).next().hide();
        });
     }
    });

    
});


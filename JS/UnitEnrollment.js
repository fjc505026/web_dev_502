var AddTut="<td><a class=\"btn btn-success text-white\" href=\"TutAllocation.html\" >enroll</a></td>";
var DeleTut="<td><a class=\"btn btn-danger text-white\" href=\"#\" >remove</a></td>";

var val_campus=0;
var val_Period=0;

//window.setTimeout("window.location='/phpProject/Timetable.php'", 0);
$(function(){
    $.ajax({
      type:'GET',
      dataType: 'json',
      url:'../JSON/testdata.json',
      success:function(data){
        $.each(data, function(i,unit){
            if((val_campus==0)&&(val_Period==0))
            {
                $("#UnitEnrol_body").append("<tr><td>"+unit.Code +"</td><td>"+unit.Coordinator +"</td><td>"+unit.Lecuter+"</td><td>"+unit.Description+"</td><td>"+unit.Campus+"</td><td>"+unit.Period+"</td>"+AddTut+"</tr>");
            }
        })
      }
    });

    $("#campus").click(function(){
        val_campus=$("#campus").val(); 
        var name_campus;
        switch(val_campus){
         case "1": name_campus="Pandora";break;
         case "2": name_campus="Rivendell";  break;
         case "3": name_campus="Neverland";break;
         case "0": name_campus="All";break;
        }
        $("#UnitEnrol_body").empty(); 
        $.ajax({
            type:'GET',
            dataType: 'json',
            url:'../JSON/testdata.json',
            success:function(data){
                $.each(data, function(i,unit){
                if (name_campus=="All")
                   $("#UnitEnrol_body").append("<tr><td>"+unit.Code +"</td><td>"+unit.Coordinator +"</td><td>"+unit.Lecuter+"</td><td>"+unit.Description+"</td><td>"+unit.Campus+"</td><td>"+unit.Period+"</td>"+AddTut+"</tr>");
                else if(unit.Campus==name_campus)
                    $("#UnitEnrol_body").append("<tr><td>"+unit.Code +"</td><td>"+unit.Coordinator +"</td><td>"+unit.Lecuter+"</td><td>"+unit.Description+"</td><td>"+unit.Campus+"</td><td>"+unit.Period+"</td>"+AddTut+"</tr>");
              })
            }
          });
        }
    );

    $("#studyPeriod").click(function(){
        val_Period=$("#studyPeriod").val(); 
        var name_Periods;
        switch(val_Period){
         case "1": name_Periods="S1";break;
         case "2": name_Periods="S2";  break;
         case "3": name_Periods="Winter School";break;
         case "4": name_Periods="Spring School";break;
         case "0": name_Periods="All";break;
        }
        $("#UnitEnrol_body").empty(); 
        $.ajax({
            type:'GET',
            dataType: 'json',
            url:'../JSON/testdata.json',
            success:function(data){
                $.each(data, function(i,unit){
                if (name_Periods=="All")
                   $("#UnitEnrol_body").append("<tr><td>"+unit.Code +"</td><td>"+unit.Coordinator +"</td><td>"+unit.Lecuter+"</td><td>"+unit.Description+"</td><td>"+unit.Campus+"</td><td>"+unit.Period+"</td>"+AddTut+"</tr>");
                else if(unit.Period==name_Periods)
                    $("#UnitEnrol_body").append("<tr><td>"+unit.Code +"</td><td>"+unit.Coordinator +"</td><td>"+unit.Lecuter+"</td><td>"+unit.Description+"</td><td>"+unit.Campus+"</td><td>"+unit.Period+"</td>"+AddTut+"</tr>");
              })
            }
          });
        }
    );
});


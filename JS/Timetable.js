
var AddTut="<td><a class=\"btn btn-success text-white\" href=\"TutAllocation.html\" >allocate</a></td>";
var DeleTut="<td><a class=\"btn btn-danger text-white\" href=\"#\" >remove</a></td>";

$().ready(function() { 
    if(Demo_UserInfo.enroll_unit1.Tutoral_allocate==0)
        $("tbody tr:first").append("<td>"+unitDetails_Demo.Code+"</td> <td>"+DemoLecTime+"</td><td>"+DemoTut1Info+" / "+DemoTut2Info+"</td>"+AddTut);
    else if (Demo_UserInfo.enroll_unit1.Tutoral_allocate==1)
    $("tbody tr:first").append("<td>"+unitDetails_Demo.Code+"</td> <td>"+DemoLecTime+"</td><td>"+DemoTut1Info+"</td>"+DeleTut);
    else if (Demo_UserInfo.enroll_unit1.Tutoral_allocate==2)
    $("tbody tr:first").append("<td>"+unitDetails_Demo.Code+"</td> <td>"+DemoLecTime+"</td><td>"+DemoTut2Info+"</td>"+DeleTut);


    if(Demo_UserInfo.enroll_unit1.Tutoral_allocate==1)
      switch  (unitDetails_Demo.Tutorial1.Day){
        case "Monday":checktime(unitDetails_Demo);break;
        case "Tuesday": checktime(unitDetails_Demo);break;
        case "Wednesday": checktime(unitDetails_Demo);break;
        case "Thursday": checktime(unitDetails_Demo);break;
        case "Friday": checktime(unitDetails_Demo);
        default: break;
      }

 })


function checktime(x){
     switch (x.Tutorial1.Start){
        case "8:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "9:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "10:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "11:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "12:00":$("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "13:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "14:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "15:00": $("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "16:00":$("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        case "17:00":$("#Mon8am").removeClass("no-events").addClass("has-events row-fluid lecture bg-primary");
                     $("#Mon8am").attr('rowspan','2');
                     $("#Mon8am").text(x.Code+"/"+x.Name+"/"+x.Coordinator);
                     break;
        default: 0;break;
     }
 }
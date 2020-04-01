
/************************************AUTHOR STATEMENT********************************************/
    I declare that all material in this assignment is my own work except where there is clear
    acknowledgement or reference to the work of others. I am aware that my assignment may be
    submitted to plagiarism detection software, and might be retained on its database. I have read
    and complied with the University statement on Plagiarism and Academic Integrity on the
    University website at www.utas.edu.au/plagiarism.
    I will keep a copy of this assignment until results have been finalised.
/*********************************************************************************************/

1.Gerneral framework
    All html, javascript, JSON (test data), format(CSS), images files are located in the responding filefolders except Mainpage(index.html) in the root filefolder. 
    The majority of the data are get from JSON file by using AJAX "GET", but still  some infomation is just statically display.
    Usually, the first row in tables shows static data in HTML, which is for better display the structure of HTML (it may be replaced in second assginment).
    The navigation bar repeats in the all webpages except registration pages, which should not be implemented like that, it can be improve by AJAX to get script or  php include() funtion.(will be improved in assginment2).

2.Access rights:
    From Mainpage to access to  Staff, UnitsMaster pages require to log in, which can be accessed by the Log_in button (only valid in mainpage),
    it will automatically fill in a valid email and password.

    From other pages  to access to Staff, UnitsMaster pages do not required check validation (for easy to display the functionalities). But some pages show different
    infomation before or after log in.(this can be checked through the log in button)


3.Pages' features:
    registration page        : access from Registr button, two different views base on student or staff.
    Unit Detail page         : click on each row will show detial, the light text(Available semester and campus) link to unit enrollment.
    Unit Enrolment page      : enroll and withdraw button only work for first row (waiting for change when has database connect), the two filters could work fine independently.
    Individual Timetable Page: not log in, show all the availabe units.
                               log in , show the unit already enrolled, you can allocate tutorials from allocate button.
    Tutorial allocation page : it can be only accessed after logging in from the allocate button in Timetable page .   
    MasterpageofStaff        : 
    Masterpageofunits        :                          



4.References :
The timetable is refer to template http://jsfiddle.net/dvirazulay/Lhe7C/ , html and CSS parts.
some functions code may be used from www.w3schools.com.

Demo sites-
https://zollege.in/bba/pune/full-time-colleges
https://www.collegedekho.com/filter/barch-btech-mcom-colleges-in-india/
https://collegedunia.com/india-colleges

APIs-
http://18.189.207.215:8080/syudynamicnews
http://18.189.207.215:8080/syudlogomaster
http://18.189.207.215:8080/syudindexcountrymaster
http://18.189.207.215:8080/syudexammaster
http://18.189.207.215:8080/syudstudentmaster/info

localhost:8080/databaselisteducationmaster
localhost:8080/collegemaster
localhost:8080/collegemaster/ccourse
localhost:8080/collegemaster/cstatename
localhost:8080/collegemaster/cspecialization  - btech
localhost:8080/collegemaster/ccourselevel
localhost:8080/collegemaster/cprogrammetype
localhost:8080/collegemaster/ccollegetype -  not needed
localhost:8080/collegemaster/cextraexamname
http://18.189.207.215:8080/collegemaster/ccityname
http://18.189.207.215:8080/collegemaster/cduration

https://www.selectyouruniversity.com/api/response.php?section=filtercollegestream 
https://www.selectyouruniversity.com/api/response.php?section=filtercollegetype

api
filtercollegetypestream&stream=management
Resp-
{
    "nCollegeID": 1900,
    "cCollegeName": "Abhinav Education Society s Institute of Management and Research - [AESIMR], Pune",
    "cCollegeLevel": "College",
    "cCollegeCategory": "Private",
    "cCampus": "Sr.No. 23/3/2/2, AP Narhe Katraj Mumbai Bypass Highway Tal Haveli, Maharashtra  ",
    "cAddress": "Sr.No. 23/3/2/2, AP Narhe Katraj Mumbai Bypass Highway Tal Haveli, Maharashtra  ",
    "cCity": "Pune",
    "nCityID": 0,
    "State": null,
    "cCountry": null,
    "cZipCode": "411041",
    "cWebsite": "https://www.ismrpune.edu.in",
    "cUniversityContactNo": "07028006424",
    "cUniversityMailID": "admission@ismrpune.edu.in",
    "cCollegeType": "",
    "cYearEstablished": "2007",
    "cGoogleMapLink": "https://www.google.com/maps/place/ISMR Pune/@18.416271,73.9691682,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2c058e8d9e15b:0x541eee74dbde91ba!8m2!3d18.416271!4d73.9713569",
    "cDistanceCapital": "1556",
    "cAccrediation": " AESIMR is affiliated to Pune University",
    "cAwards": "awared Business School of the Year 2019, Excellence in Students Placements for 2018",
    "cGalleryLink": "https://drive.google.com/drive/folders/1csd9E2H2Cn8wyOHxD9SacyfEPpqw9XIU?usp=sharing",
    "cWorldrankingwithRef": "1305 by 4icu",
    "cCountryRankingwithRef": "9 by 4iu",
    "cIndianFood": "Yes",
    "cLivingExpenses": "pune:10,000-15,000",
    "cUniversityInfo": null,
    "cNoOfIndianStudent": "3694",
    "cNoOfInterNationalStudent": "0",
    "Alumni": "Dr. Nilesh Bhutada director ,Dean: Prof. Anjan Banerjee Associate,",
    "cContactPerson": "Na",
    "cContactNo": "08888861739",
    "dtCreatedDate": null,
    "cFilledStatus": "Completed",
    "cFilledBy": "gulhaneprajkta@gmail.com",
    "dtUpdatedDate": {
        "date": "2022-04-02 10:49:37.360000",
        "timezone_type": 3,
        "timezone": "Europe/Dublin"
    },
    "cApprovedStatus": "NotApproved",
    "cApprovedBy": "",
    "dtApprovedDate": {
        "date": "2022-04-02 10:49:37.360000",
        "timezone_type": 3,
        "timezone": "Europe/Dublin"
    },
    "cLinkName": null
}

https://www.selectyouruniversity.com/university/all-india-institute-of-medical-sciences-aiims-new-delhi/ 

http://18.189.207.215:8080
http://18.189.207.215:8080/collegemaster/ccourse

state, stream, course - radio button

http://localhost:4500/university

URLs-
stream* e.g management http://localhost:4500/university/management  or  http://localhost:4500/management 
state* uttar-pradesh-colleges http://localhost:4500/university/management/uttar-pradesh-colleges
city delhi https://collegedunia.com/management-colleges?city_id=125
course*  https://collegedunia.com/mba/noida-colleges  or http://localhost:4500/university/mba/management 
program type*  https://collegedunia.com/mba/noida/full-time-colleges
univ type  https://collegedunia.com/mba/noida/full-time-colleges?type_of_college=Private
entrance.exam  https://collegedunia.com/mba/noida-colleges?course_duration=Full%20Time&exam_id=242&type_of_college=Private
average fees* https://collegedunia.com/mba/noida-colleges?course_duration=Full%20Time&exam_id=242&fees=100001-200000&type_of_college=Private
course type*  https://collegedunia.com/mba/noida-colleges?course_duration=Full%20Time&course_type=Diploma&exam_id=242&fees=100001-200000&type_of_college=Private
agency------------------
affilation--------
course duration* https://collegedunia.com/mba/noida-colleges?course_duration=Full%20Time&course_type=Diploma&course_year=1&exam_id=242&fees=100001-200000&type_of_college=Private
college category--------
gender accepted---------
study board*

Note-
* means single select
Course is linked with stream
B.com - commerce

Original site-
select your university

Testing site-
http://testing.mentebit.com/university 


https://github.com/rohitnehra/syucsschanges
https://github.com/rohitnehra/syu-ssr15feb2023

Requirements/Todo/APIs needed-
stream api
university type api
average fees api - hardcode

city list on the basis of state

List of data according to the tab selection



Change text university to india
Bind colleges also with text



stream* management



state* uttar-pradesh
city delhi 

city_id=125

course*   mba noida-colleges  
course*   mba management
 
program type*   mba noida full-time-colleges

univ type* mba noida full-time-colleges   type_of_college=Private

entrance.exam   mba noida-colleges   course_duration=Full%20Time&exam_id=242     type_of_college=Private

average fees*  mba noida-colleges course_duration=Full%20Time exam_id=242 fees=100001-200000 type_of_college=Private
course type*   mba noida-colleges course_duration=Full%20Time  course_type=Diploma&exam_id=242  fees=100001-200000  type_of_college=Private

course duration*  mba noida-colleges course_duration=Full%20Time course_type=Diploma course_year=1 exam_id=242 fees=100001-200000 type_of_college=Private


payload - prepare - object  obj = {"name":'vfd", "email":'dvd'}

api- post

api - get , put, patch

https://www.selectyouruniversity.com/api/response.php?section=insertdetails&name=vfd&email=dvd

https://bizcallcrmforms.com/response.php?section=filtertopcoursepage&coursekeyword=B%20tech




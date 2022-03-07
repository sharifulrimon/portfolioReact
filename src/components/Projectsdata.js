import crud from '../Assets/Projects/crud.png';
import vegefood from '../Assets/Projects/vegefood.png';
import psdhtml from '../Assets/Projects/psdhtml.png';
import note from '../Assets/Projects/notesapp.png'
import organic from '../Assets/Projects/organicfood.png'
import hotOnion from '../Assets/Projects/hotonion.png'
import calculator from '../Assets/Projects/calculator.png'
import pagination from '../Assets/Projects/pagination.png'
import randomname from '../Assets/Projects/randomname.png'
import pioneerbank from '../Assets/Projects/pioneerbank.png'
import pinmatcher from '../Assets/Projects/pinmatcher.png'

const data= [
    {

        "imgPath":vegefood,
        "isBlog":false,
        All:"All",
        "title": "Vegefoods",
        "description": "Vegefoods is an excellent free fruits and vegetables website template for crafting a modern web space. The layout has a clean and minimal web design which pushes products right in front of their eyes.",
        "link" : "http://www.mypersonalportfolio.tk/vegefood",
        "id":2,
        "tag":"Web Design"
    
     },
     {
        "imgPath": note,
        All:"All",
        "isBlog":false,
        "title":"Online Note system",
        "description":"Online note system is a platform for who needs to save their private notes and important documents in this website by create their own account. User can login/signup their account and add, edit and delete their notes and document.",
        "link": "http://www.mypersonalportfolio.tk/NotesAppFinal",
        "id":4,
        "tag": "Web Development"
    },

   {    
        
        id:1,
        tag:"Web Development",
        All:"All",
        
        imgPath : crud,
        isBlog : false,
        title: "Crud Operation",
        description : "This project has implement crud operation using php, mysql. User can create, update or delete data from user interface.",
       link: "https://github.com/sharifulrimon/FullstackTest"
     
   },
   
   

{
      "imgPath":psdhtml,
      All:"All",
      "isBlog": false,
      "title":"Psd to Html",
      "description": "This project is convert psd templete to html website.",
      "link" : "http://www.mypersonalportfolio.tk/Project 1",
      "id": 3,
      "tag":"Web Design"
},



  {

      "imgPath":organic,
      All:"All",
      "isBlog":false,
      "title":"Organic Food",
      "description":"This is my final year project. It's ecommerce project for selling organic food. User can find all ecommerce website funtionality in this website. I used html, css, bootstrap, javascript php, mysql for develop this website ",
      "link": "http://www.mypersonalportfolio.tk/Organic_Food",
      "id":5,
      "tag": "Web Development"
  },


  {


      "imgPath":hotOnion,
       All:"All",
      "isBlog":false,
      "title":"Hot Onion",
      "description": "Hot onion website has simple restaurant features develop by latest fronted library React.",
      "link":"https://github.com/sharifulrimon/Restaurant-Website",
      "id":6,
      "tag": "React"
  },
  {
      imgPath: calculator,
      All:"All",
      "isBlog":false,
      "title":"Calculator",
      "description": "This is simple calculator using react js. User can calculate all basic matchmatical operations",
      "link":"https://github.com/sharifulrimon/Calculator",
      "id":7,
      "tag": "React"

      
  },
  {
      imgPath: pagination,
    All:"All",
    "isBlog":false,
    "title":"pagination",
    "description": "This is simple pagination for large data. User can browse data using prev or next button also can browse with number of the page button.",
    "link":"https://github.com/sharifulrimon/Calculator",
    "id":7,
    "tag": "React"
},
{
    imgPath: randomname,
  All:"All",
  "isBlog":false,
  "title":"Random Person Generator",
  "description": "Random Person Generator is a small project for find random person data. User can browse random person by click next button",
  "link":"https://github.com/sharifulrimon/RandomPerson",
  "id":7,
  "tag": "React"
},
{
    imgPath: pioneerbank,
  All:"All",
  "isBlog":false,
  "title":"Pioneer Bank",
  "description": "This is simple money bank. User can calculate their money using this website",
  "link":"http://www.mypersonalportfolio.tk/pioneer-bank/",
  "id":7,
  "tag": "Web Development"
},
{
    imgPath: pinmatcher,
  All:"All",
  "isBlog":false,
  "title":"Pin Matcher",
  "description": "Pin matcher project has a random pin generate button and user need to input same pin which generate before. So, if pin matched, it's show a successful message.",
  "link":"http://www.mypersonalportfolio.tk/pin-matcher/",
  "id":7,
  "tag": "Web Development"
}



];
export default data;

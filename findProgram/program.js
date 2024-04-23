
let programs = [
  {
      image: "/image/continue.jpg",
      course: "B.B.A.",
      program: "3 Years",
      mode: "Year"
  },
  {
      image: "/image/continue.jpg",
      course: "B.B.A. AGRICULTURE",
      program: "3 Years",
      mode: "Year"
  },
  {
      image: "/image/continue.jpg",
      course: "B.B.A. AVIATION",
      program: "Graduate",
      duration: "3 Years",
      mode: "Year"
  },
  {
      image: "/image/continue.jpg",
      course: "B.B.A. AIRLINE MANAGEMENT",
      program: "3 Years",
      mode: "Year"
  },
  {
    image: "/image/continue.jpg",
    course: "B.B.A. AIRPORT MANAGEMENT",
    program: "3 Years",
    mode: "Year"
},
{
    image: "/image/continue.jpg",
    course: "B.B.A. AVIATION & TRAVEL TOURISM",
    program: "3 Years",
    mode: "Year"
},
{
    image: "/image/continue.jpg",
    course: "B.B.A. AVIATION OPERATION",
    program: "Graduate",
    duration: "3 Years",
    mode: "Year"
},
{
    image: "/image/continue.jpg",
    course: "B.C.A.",
    program: "3 Years",
    mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.C.A. HONS.",
  program: "3 Years",
  mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.J.M.C.",
  program: "3 Years",
  mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.B.A. IN RETAILING",
  program: "Graduate",
  duration: "3 Years",
  mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.C.A. LATERAL ENTRY",
  program: "2 Years",
  mode: "Year"
},
{
image: "/image/continue.jpg",
course: "BTTM",
program: "3 Years",
mode: "Year"
},
{
image: "/image/continue.jpg",
course: "B.B.A. GLOBAL BUSINESS MANAGEMENT",
program: "3 Years",
mode: "Year"
},
{
image: "/image/continue.jpg",
course: "B.B.A. SYNCHRONIZED WITH COMPETITIVE EXAMS",
program: "Graduate",
duration: "3 Years",
mode: "Year"
},
{
image: "/image/continue.jpg",
course: "B.B.A. FINANCIAL SERVICES",
program: "3 Years",
mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "MCA",
  program: "2 Years",
  mode: "Year"
  }
];
let BbaCourse = [
  {
      image: "/image/continue.jpg",
      course: "B.B.A.",
      program: "3 Years",
      mode: "Year"
  },
  {
      image: "/image/continue.jpg",
      course: "B.B.A. AGRICULTURE",
      program: "3 Years",
      mode: "Year"
  },
  {
      image: "/image/continue.jpg",
      course: "B.B.A. AVIATION",
      program: "Graduate",
      duration: "3 Years",
      mode: "Year"
  },
  {
      image: "/image/continue.jpg",
      course: "B.B.A. AIRLINE MANAGEMENT",
      program: "3 Years",
      mode: "Year"
  },
  {
    image: "/image/continue.jpg",
    course: "B.B.A. AIRPORT MANAGEMENT",
    program: "3 Years",
    mode: "Year"
},
{
    image: "/image/continue.jpg",
    course: "B.B.A. AVIATION & TRAVEL TOURISM",
    program: "3 Years",
    mode: "Year"
},
{
    image: "/image/continue.jpg",
    course: "B.B.A. AVIATION OPERATION",
    program: "Graduate",
    duration: "3 Years",
    mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.B.A. IN RETAILING",
  program: "Graduate",
  duration: "3 Years",
  mode: "Year"
},
{
image: "/image/continue.jpg",
course: "B.B.A. GLOBAL BUSINESS MANAGEMENT",
program: "3 Years",
mode: "Year"
},
{
image: "/image/continue.jpg",
course: "B.B.A. SYNCHRONIZED WITH COMPETITIVE EXAMS",
program: "Graduate",
duration: "3 Years",
mode: "Year"
},
{
image: "/image/continue.jpg",
course: "B.B.A. FINANCIAL SERVICES",
program: "3 Years",
mode: "Year"
}
];
let BcaCourse = [
{
    image: "/image/continue.jpg",
    course: "B.C.A.",
    program: "3 Years",
    mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.C.A. HONS.",
  program: "3 Years",
  mode: "Year"
},
{
  image: "/image/continue.jpg",
  course: "B.C.A. LATERAL ENTRY",
  program: "2 Years",
  mode: "Year"
}
];
let BttmCourse = [
{
image: "/image/continue.jpg",
course: "BTTM",
program: "3 Years",
mode: "Year"
}
];
let BgmcCourse = [
{
  image: "/image/continue.jpg",
  course: "B.G.M.C.",
  program: "3 Years",
  mode: "Year"
}
];
let McaCourse = [
  {
    image: "/image/continue.jpg",
    course: "MCA",
    program: "2 Years",
    mode: "Year"
  }
];
let boxes = document.querySelector("#boxes");


var x, i, j, l, ll, selElmnt, a, b, c ;
let selectCourses = document.querySelector(".select-course");
let BBA = document.querySelector(".BBA");
let BCA = document.querySelector(".BCA");
let BTTM = document.querySelector(".BTTM");
let BGMC = document.querySelector(".BGMC");
let MCA = document.querySelector(".MCA");
let othersCourse = document.querySelector(".others")
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      if(h.outerText == "All Courses"){
        let clutter = ""
         programs.forEach(elem => {
           clutter += `<div class="box">
                      <div class="image">
                        <img src="${elem.image}" loading="lazy" alt="">
                      </div>
                      <div class="programs-data">
                        <h3>Course - ${elem.course}</h3>
                        <p>Program - ${elem.program}</p>
                        <p>Duration - ${elem.duration}</p>
                        <p>Mode - ${elem.mode}</p>
                        <div class="btn">EXPLORE</div>
                      </div>
                    </div>`;
         });
         boxes.innerHTML = clutter;

      }
       else if(h.outerText == "B.B.A. Course"){
        let clutter = ""
         BbaCourse.forEach(elem => {
           clutter += `<div class="box">
                      <div class="image">
                        <img src="${elem.image}" loading="lazy" alt="">
                      </div>
                      <div class="programs-data">
                        <h3>Course - ${elem.course}</h3>
                        <p>Program - ${elem.program}</p>
                        <p>Duration - ${elem.duration}</p>
                        <p>Mode - ${elem.mode}</p>
                        <div class="btn">EXPLORE</div>
                      </div>
                    </div>`;
         });
         boxes.innerHTML = clutter;

       }
       else if (h.outerText == "B.C.A. Course") {
        let clutter = ""
          BcaCourse.forEach(elem => {
           clutter += `<div class="box">
                      <div class="image">
                        <img src="${elem.image}" loading="lazy" alt="">
                      </div>
                      <div class="programs-data">
                        <h3>Course - ${elem.course}</h3>
                        <p>Program - ${elem.program}</p>
                        <p>Duration - ${elem.duration}</p>
                        <p>Mode - ${elem.mode}</p>
                        <div class="btn">EXPLORE</div>
                      </div>
                    </div>`;
         });
         boxes.innerHTML = clutter;

       }
       else if (h.outerText == "B.T.T.M. Course") {
        let clutter = ""
         BttmCourse.forEach(elem => {
           clutter += `<div class="box">
                      <div class="image">
                        <img src="${elem.image}" loading="lazy" alt="">
                      </div>
                      <div class="programs-data">
                        <h3>Course - ${elem.course}</h3>
                        <p>Program - ${elem.program}</p>
                        <p>Duration - ${elem.duration}</p>
                        <p>Mode - ${elem.mode}</p>
                        <div class="btn">EXPLORE</div>
                      </div>
                    </div>`;
         });
         boxes.innerHTML = clutter;

       }
       else if (h.outerText == "B.G.M.C. Course") {
        let clutter = ""
        BgmcCourse.forEach(elem => {
           clutter += `<div class="box">
                      <div class="image">
                        <img src="${elem.image}" loading="lazy" alt="">
                      </div>
                      <div class="programs-data">
                        <h3>Course - ${elem.course}</h3>
                        <p>Program - ${elem.program}</p>
                        <p>Duration - ${elem.duration}</p>
                        <p>Mode - ${elem.mode}</p>
                        <div class="btn">EXPLORE</div>
                      </div>
                    </div>`;
         });
         boxes.innerHTML = clutter;

       }
       else if (h.outerText == "M.C.A. Course") {
        let clutter = ""
        McaCourse.forEach(elem => {
           clutter += `<div class="box">
                      <div class="image">
                        <img src="${elem.image}" loading="lazy" alt="">
                      </div>
                      <div class="programs-data">
                        <h3>Course - ${elem.course}</h3>
                        <p>Program - ${elem.program}</p>
                        <p>Duration - ${elem.duration}</p>
                        <p>Mode - ${elem.mode}</p>
                        <div class="btn">EXPLORE</div>
                      </div>
                    </div>`;
         });
         boxes.innerHTML = clutter;

       }
       else if (h.outerText == "Others") {
        let h1 = `<h1>NULL</h1>`;
        
        boxes.innerHTML = `<div class="box">
           ${h1}
        </div>`;
        
       } 
        
    });
    b.appendChild(c);
    
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);




let clutter = ""
let allPrograms = programs.forEach((elem,idx) => {
    clutter += `<div class="box">
    <div class="image">
        <img src="${elem.image}" loading="lazy" alt="">
    </div>
    <div class="programs-data">
        <h3>Course - ${elem.course}</h3>
        <p>Program - ${elem.program}</p>
        <p>Duration - ${elem.duration}</p>
        <p>Mode - ${elem.mode}</p>
        <a href=""><div class="btn">EXPLORE</div></a>
    </div>
</div>`;


});
boxes.innerHTML = clutter;

let chatFixed = document.querySelector("#chat-fixed");
let chatCloseIcon = document.querySelector("#chat-close-icon");

chatCloseIcon.addEventListener("click", function(){
  chatFixed.style.display = "none";
})






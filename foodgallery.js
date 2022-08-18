
 function fnChangeBorder(imgId) {
    document.getElementById(imgId).style.border = "solid 5px #AA00FF";};

function fnChangeBorder2(imgId) {
    document.getElementById(imgId).style.border = "solid 5px #ff0080";};

function fnChangeBorder3(imgId) {
    document.getElementById(imgId).style.border = "solid 5px #ff8400";};

function myFunction(imgId) {
  document.getElementById(imgId).style.filter = "grayscale(100%)";
}

function myFunction2(imgId) {
  document.getElementById(imgId).style.filter = "blur(5px)";
}

function myFunction3(imgId) {
  document.getElementById(imgId).style.filter = "grayscale(50%)";
}

function myFunction9(imgId) {
  document.getElementById(imgId).style.filter = "invert(100%)";
}

function myFunction4(imgId) {
    const base64data="https://www.thedeliciouscrescent.com/wp-content/uploads/2016/10/Persian-Noodle-Soup-with-Beans-and-Herbs.jpg"
    document.getElementById(imgId).src=base64data;
    }

newFunction();

function newFunction() {
    export { fnChangeBorder, fnChangeBorder2, fnChangeBorder3, myFunction, myFunction2, myFunction3, myFunction4, myFunction9 };
}

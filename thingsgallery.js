
/*As mentioned previously, would have liked not to use the "id"
in the js file, but couldn't figure out how to make function that can be imported and then 
the id inputed into the function*/

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("snail").innerHTML = myText;
}


function myDateFunction(pId) {
    var d = new Date();
    document.getElementById(pId).innerHTML = d.getFullYear();
    }

export { getText, myDateFunction };
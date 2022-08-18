function imagefetch() {
  const imageUrl = "https://picsum.photos/200/300";

  /*This is my fetch call which I used instead of the ajax CRUD call, hope that's ok.
Would have liked to not use the ids (such as "third7") in the js file, 
but wasn't sure how to import the module so that I would be able to input different ids, would 
appreciate any feedback on this */

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64data = reader.result;
    document.getElementById("third7").src = base64data;
    document.getElementById("third8").src = base64data;
    document.getElementById("first3").src = base64data;
  };

  (async () => {
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    reader.readAsDataURL(imageBlob);
  })();
}

class Human {
  constructor(eyeColor, height, gender, name) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.eyeColor = eyeColor;
  }
  sayHi() {
    console.log(this.name);
  }
}

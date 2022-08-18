
class Client{
  constructor(id, name, address, phone) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}

const myButterfly = new Butterfly("Ecuador", "Zebra Longwing");
document.getElementById("butterfly").innerHTML =
myButterfly.country + " " + myButterfly.species;

export {Butterfly};
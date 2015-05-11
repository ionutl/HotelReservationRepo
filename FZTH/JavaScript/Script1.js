//function hotel(id, name, description, country, city, addedDate, startPrice) {
//    this.id=id;
//    this.name=name;
//    this.description=description;
//    this.country=country;
//    this.city=city;
//    this.addedDate=addedDate;
//    this.startPrice=startPrice;
//};

//hotel.prototype.leaveDate = function () { return this.addedDate; };

//var myHotel = new hotel(1, "Persoana 1", "huge", "Romania", "Iasi", "May 5, 2012", 115.5);
//console.log(myHotel.leaveDate());
//console.log(myHotel);

var hotels = ["Continental", "Traian", "Europa"];
console.log(hotels);
hotels.push("Europa");
console.log(hotels);
hotels.pop();
console.log(hotels);
hotels.unshift("Medellin", "Cariocas");
console.log(hotels);
hotels.shift();
console.log(hotels);

var myJson = JSON.stringify(hotels);
console.log(myJson);
var myJS = JSON.parse(myJson);
console.log(myJS);
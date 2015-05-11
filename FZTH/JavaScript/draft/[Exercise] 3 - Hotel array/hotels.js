function Hotel(hotel) {
	this.id = hotel.id;
	this.name = hotel.name;
	this.description = hotel.description;
	this.country = hotel.country;
	this.city = hotel.city;
	this.addedDate = hotel.addedDate;
	this.startPrice = hotel.startPrice;
}

var hotels = [
	new Hotel({id: 1, name: 'Hotel 1', description: 'Hotel 1 description', country: 'Country 1', city: 'City 1', addedDate: new Date(2000, 1, 1), startPrice: 11.1 }),
	new Hotel({id: 2, name: 'Hotel 2', description: 'Hotel 2 description', country: 'Country 2', city: 'City 2', addedDate: new Date(2000, 2, 2), startPrice: 22.2 })
];
	
var hotel1 = new Hotel({id: 3, name: 'Hotel 3', description: 'Hotel 3 description', country: 'Country 3', city: 'City 3', addedDate: new Date(2000, 3, 3), startPrice: 33.3 });
var hotel2 = new Hotel({id: 4, name: 'Hotel 4', description: 'Hotel 4 description', country: 'Country 4', city: 'City 4', addedDate: new Date(2000, 4, 4), startPrice: 44.4 });


console.log('Initial length: ' + hotels.length);

hotels.push(hotel1);
console.log('Length after push: ' + hotels.length);

hotels.pop();
console.log('Length after pop: ' + hotels.length);

hotels.unshift(hotel2);
console.log('Length after unshift: ' + hotels.length);

hotels.shift();
console.log('Length after shift: ' + hotels.length);



var hotelsJson = JSON.stringify(hotels);
console.log(hotelsJson);

var hotelsFromJson = JSON.parse(hotelsJson);

console.log('Initial array:');
console.log(hotels);

console.log('Parsed result:');
console.log(hotelsFromJson);
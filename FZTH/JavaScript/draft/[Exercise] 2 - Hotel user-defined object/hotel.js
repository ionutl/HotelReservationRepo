function Hotel(hotel) {
	this.id = hotel.id;
	this.name = hotel.name;
	this.description = hotel.description;
	this.country = hotel.country;
	this.city = hotel.city;
	this.addedDate = hotel.addedDate;
	this.startPrice = hotel.startPrice;
}

Hotel.prototype.getDisplayText = function() {
	return this.name + ' ' + this.country;
};

var hotel1 = new Hotel({
    id: 1,
    name: 'Hotel 1',
    description: 'Hotel 1 description',
    country: 'Country 1',
    city: 'City 1',
    addedDate: new Date(2000, 1, 1),
    startPrice: 11.1
});

var hotel2 = new Hotel({
    id: 2,
    name: 'Hotel 2',
    description: 'Hotel 2 description',
    country: 'Country 2',
    city: 'City 2',
    addedDate: new Date(2000, 2, 2),
    startPrice: 22.2
});

console.log(hotel1.getDisplayText());
console.log(hotel2.getDisplayText());
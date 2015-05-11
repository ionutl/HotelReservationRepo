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
	new Hotel({ id: 1, name: 'Hotel 1', description: 'Hotel 1 description', country: 'Country 1', city: 'City 1', addedDate: new Date(2000, 1, 1), startPrice: 11.1 }),
	new Hotel({ id: 2, name: 'Hotel 2', description: 'Hotel 2 description', country: 'Country 2', city: 'City 2', addedDate: new Date(2000, 2, 2), startPrice: 22.2 })
];

function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function (rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function (colIndex, c) {
            row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

$(document).ready(function () {
    var data = hotels;
    var hotelTable = makeTable($(document.body), data);
});


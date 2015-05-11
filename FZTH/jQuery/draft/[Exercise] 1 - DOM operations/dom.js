$(function() {
	executeDomQueries();
});

function executeDomQueries() {
	console.log('The node having the id “hotelsContainer”');
	console.log($('#hotelsContainer'));

	console.log('All the span tags that are children of the node with the id “third”');
	console.log($('#third span'));

	console.log('All the nodes having the class “right”');
	console.log($('.right'));
}
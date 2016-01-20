/*
Exercise 18: Retrieve url of the largest boxart

Let's try combining reduce() with map() to reduce multiple boxart objects to a
 single value: the url of the largest box art.
 */

 function() {
	var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	// You should return an array containing only the largest box art. Remember that reduce always
	// returns an array with one item.
	return boxarts.
	  reduce(function(previousValue,currentValue) {
		if (previousValue.width * previousValue.height > currentValue.width * currentValue.height) {
		  return previousValue;
		}
		else {
		  return currentValue;
		}
	  }).
	  map(function(boxart) {
		return boxart.url;
	  });
}
		

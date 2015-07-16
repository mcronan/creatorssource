$(function(){

	$('.factory-button').on('click', function(){
		$('.factory-button').css({
			'color' : 'white',
			'background-color' : '#5fcf80',
		})
	})

	$('.factory-button').on('click', function(){
		$('.brand-button').css({
			'color' : '#5fcf80',
			'background-color' : 'white',
		})
	})

	$('.brand-button').on('click', function(){
		$('.brand-button').css({
			'color' : 'white',
			'background-color' : '#5fcf80',
		})
	})

	$('.brand-button').on('click', function(){
		$('.factory-button').css({
			'color' : '#5fcf80',
			'background-color' : 'white',
		})
	})

 // toggling between brand and factory info //

 	$('.factory-button').on('click', function(){
 		$('.brand-display').css({'display' : 'none'})
 		$('.factory-display').css({'display' : 'block'})
 	})

	$('.brand-button').on('click', function(){
 		$('.brand-display').css({'display' : 'block'})
 		$('.factory-display').css({'display' : 'none'})
 	})

 // *******************************
 // 	  Ratings &  Reviews 
 //  ******************************//

 	var revArray = [];
	var revValue = $('#review').val()

	var Review = function(review){
		this.review = review;
	}
	
	//****** for the rating stars *******//
	$('#submit').on('click', function(){
			var newReview = new Review(revValue)
			revArray.push(newReview)
			$('.number').text(revArray.length)
	})	


 // *******************************
 // 	  	  For the reviews
 //  ******************************//
 	$('#submit').on('click', function(){
		$('.rating').remove();
		// this empties out the textbox
		// assigns the contents of textbox to variable
		var theReview = $('#review').val();
		var bestReview = new Review(theReview)
		$('.newest-review').prepend('<div class="review-text">' + bestReview.review + '</div>')
		$('#review').val('')
	})

 // *******************************
 // 	  	  Ratings
 //  ******************************//

 	$('.rating-1').on('click', function(){
 	$(this).replaceWith('<i class="fa fa-star"></i>')
 	})

 	$('.rating-2').on('click', function(){
 	$(this).replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-1').replaceWith('<i class="fa fa-star"></i>')
 	})

 	$('.rating-3').on('click', function(){
 	$(this).replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-1').replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-2').replaceWith('<i class="fa fa-star"></i>')
 	})

 	$('.rating-4').on('click', function(){
 	$(this).replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-1').replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-2').replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-3').replaceWith('<i class="fa fa-star"></i>')
 	})

 	$('.rating-5').on('click', function(){
 	$(this).replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-1').replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-2').replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-3').replaceWith('<i class="fa fa-star"></i>')
 	$('.rating-4').replaceWith('<i class="fa fa-star"></i>')

 	})

/******************************
	  Add to Favourites
*****************************/
// create a class creator for favourites
// click-event on 'add to favourites'
// this will create a new instance of this class
// this will change the button to "added to favourites"
// make a div that shows your favourites

	var favArray = []
	var theString = ''
	var Favourite = function(fav) {
		this.fav = fav;
	}

	$('.favourites').on('click', function(){
		var favTitle = 'Firey Steel'
		var newFav = new Favourite(favTitle)
		favArray.push(newFav)
		console.log(favArray)

		var favPageString = favArray.map(function(name) {
			return name['fav'];
		})
		var stringer = favPageString.join('')
		console.log(stringer)
		$('.test-position').text(stringer);

		// var pushString = theString.push(stringer)
		// $('.test-position').text("hello");

	})

	$('.test-position').text(theString);
	console.log(theString)


});
   

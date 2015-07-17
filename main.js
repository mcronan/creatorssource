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
	var favArray = []
	var finalFavArray = []
	// new class for favourites 
	var Favourite = function(fav) {
		this.fav = fav;
	}

	$('.favourites').on('click', function(){
		// the title of the page, more dynamic way of doing this?
		var favTitle = 'Firey Steel'
		var newFav = new Favourite(favTitle)
		// push object to new array
		favArray.push(newFav)
		// loop over the array, get value of object
		favArray.forEach(function(name) {
			finalFavArray.push((name['fav']))
			})

		// loop over array, push to local storage
		finalFavArray.forEach(function(x){
		localStorage.setItem('page', JSON.stringify(x))
			})
	});

	 $('.favourites').on('click', function() {
	 	var $this = $(this)
	 	$this.toggleClass('favourites')
	 	if($this.hasClass('favourites')){
	 		$this.text('+ Add to favourites')
	 	} else {
	 		$this.text('Remove from favourites')
	 	}
	 })
 	
	 	// $(this).replaceWith('<button type="button" class="btn btn-success remove-from-favourites">Remove from favourites</button>')
	 // })

	 // $('.remove-from-favourites').on('click', function() {
	 // 	$('.replace-button').html('<button type="button" class="btn btn-warning favourites"> + Add to Favourites</button>')
	 // })


	// this interval timer does not work

		// setInterval(function() {
	 // 	if(favArray.length > 0) {
	 // 		var myFavPage = localStorage.getItem('page')
		// 	if(myFavPage !== null) {
		// 	//remove the quotes
		// 	var noQuotes = myFavPage.replace(/['"]+/g, '')
		// 	}
		// 	$('.tester').text(noQuotes)
	 // 		 } }, 1000);

		// get item from local storage
			var myFavPage = localStorage.getItem('page')
			if(myFavPage !== null) {
			//remove the quotes
			var noQuotes = myFavPage.replace(/['"]+/g, '')
			}
			// $('.tester').html('<div class="fav-box">' + noQuotes + '</div>' )
			$('.page-box').html(noQuotes)

	/******************************
		  Message Company
	*****************************/

	$('.message').on('click',function(){
		$('#basicModal')

	})

	var pmArray = []
	var finalPmArray = []
	var PrivateMessage = function(pm) {
		this.pm = pm;
	}

	$("#submit-pm").on('click', function(){

	// get value of submission box
	var pmValue = $('#private-message').val();
	var sendPm = new PrivateMessage(pmValue)
	// push to array
	pmArray.push(sendPm)

	pmArray.forEach(function(m){
		finalPmArray.push(m['pm'])
		})

	finalPmArray.forEach(function(finalMess){
		localStorage.setItem('message', JSON.stringify(finalMess))
		})
	// hide modal after clicking submit
	$('#basicModal').modal('hide')
	
	
	})

	var getPm = localStorage.getItem('message')
	if(getPm !== null) {
		var removeQuotes = getPm.replace(/['"]+/g, '')
		$('.pm-box').append(removeQuotes)
	}

/************* add recipient to dashboard ***********/
/** should be able to do this when clicking on submit in PM **/
		$('.pm-recipient-box').append(noQuotes)


});
   

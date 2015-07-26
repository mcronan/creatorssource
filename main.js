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
 
 	// Using toggle
 	// $('.rating-1').on('click', function(){
 	// 	$(this).find('i').toggleClass('fa fa-star')
 	// })

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
	var favTitle = $('.firey').text()

	var favArray = []
	var finalFavArray = []
	// new class for favourites 
	var Favourite = function(fav) {
		this.fav = fav;
	}

	$('.favourites').on('click', function(){

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


 	// toggle the favourite button display 
	$('.favourites').on('click', function() {
	 	var $this = $(this)
	 	$this.toggleClass('favourites')
	 	if($this.hasClass('favourites')){
	 		$this.text('+ Add to favourites')
	 		// remove from local storge
	 		localStorage.removeItem('page')

	 	} else {
	 		$this.text('Remove from favourites')
	 	}
	 })

	/******************************
		  Message Company
	*****************************/
	
	// get value of page title fron <h2>
	var pageTitle = $('.firey').text()

	$('.message').on('click',function(){
		$('#basicModal')

	})

	var pmArray = []
	var finalPmArray = []
	var PrivateMessage = function(pm, recipient, timestamp) {
		this.pm = pm;
		this.recipient = recipient
		this.timestamp = Date(Date.now())
	}

	$("#submit-pm").on('click', function(){

		// get value of submission box
		var pmValue = $('#private-message').val();
		
		// new instance 
		var sendPm = new PrivateMessage(pmValue, pageTitle, Date.now())

		// push to array
		pmArray.push(sendPm)

		// for the message
		pmArray.forEach(function(m){
			finalPmArray.push(m['pm'])
			})

		finalPmArray.forEach(function(finalMess){
			localStorage.setItem('message', JSON.stringify(finalMess))
			})

		// for the recipient title
		pmArray.forEach(function(rt){
			finalPmArray.push(rt['recipient'])
			})

		finalPmArray.forEach(function(recipTitle){
			localStorage.setItem('recipient-title', JSON.stringify(recipTitle))
			})

		// for the timestamp
		pmArray.forEach(function(time){
			finalPmArray.push(time['timestamp'])
			})

		finalPmArray.forEach(function(theTime){
			localStorage.setItem('dateTime', JSON.stringify(theTime))
			})


		// hide modal after clicking submit
		$('#basicModal').modal('hide')
	})
	
	// pull message from local storage
	var getPm = localStorage.getItem('message')
	if(getPm !== null) {
		var removeQuotes = getPm.replace(/['"]+/g, '')
		$('.pm-body-box').append(removeQuotes)
	}

	// pull Recipient Title from local storage
	var getTitle = localStorage.getItem('recipient-title')
		if(getTitle !== null) {
		var removeQuotesRecipient = getTitle.replace(/['"]+/g, '')
		$('.pm-recipient-box').append(removeQuotesRecipient)
	}

	// pull Timestamp from local storage
	var getTime = localStorage.getItem('dateTime')
		if(getTime !== null) {
		var removeQuotesTime = getTime.replace(/['"]+/g, '')
		$('.pm-time-box').append(removeQuotesTime)
	}

	



});
   

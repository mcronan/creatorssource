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
 // 	    Reviews Submission
 //  ******************************//

	var Review = function(review){
		this.review = review;
	}

	$('#submit').on('click', function(){
		var theReview = $('#review').val();
		$('.new-review').append(theReview);

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



 	// $('.rating-1, .rating-2, .rating-3, .rating-4,.rating-5').on('click', function(){
 	// 	$(this).replaceWith('<i class="fa fa-star"></i>')
 
 	// })

});


$(document).ready(function() {
	
	$('textarea').on('click', function(){
		$('#tweet-controls').css("display", "block");
		$('.tweet-compose').css('height', "5em");

		var charsLeft = Number($("#char-count").text());
		$('.tweet-compose').keydown(function(e) {
			if(e.keyCode == 8){
				if(charsLeft < 140){
					charsLeft += 1;
					if(charsLeft >= 0){
						$('#char-count').text(charsLeft);
					}
				}
			}else{
				charsLeft -= 1;
				if(charsLeft >= 0){
					$('#char-count').text(charsLeft);
				}
			}
			if(charsLeft <= 10 && charsLeft >= 0){
				$('#char-count').css("color", "red");
			}else if(charsLeft > 10){
				$('#char-count').css("color", "#999");
			}
			if(charsLeft < 0 || charsLeft === 140){
				$('#tweet-submit').prop('disabled', true);
			}else{
				$('#tweet-submit').prop('disabled', false);
			}

		})
	})

	$("#tweet-submit").click(function() {
		var element = $('<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">Mike Larrabee &nbsp;</strong>' +
							'<span class="username">@mLarrabee</span>' +

							'<p class="tweet-text">' + $(".tweet-compose").val() + '</p>' +

							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
							'</div>' +

							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +

								'<div class="time">' +
									'1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>')
		$('#stream').prepend(element);
	})

	$('#stream').on('mouseenter', '.tweet', function(){
		$(this).children('.content').children('.tweet-actions').css("display", "block");
	}).on('mouseleave', '.tweet', function(){
		$(this).children('.content').children('.tweet-actions').css("display", "none");
	}).on('click', '.tweet', function(){
		$(this).children('.content').children('.stats').css("display", "block");
	})

})
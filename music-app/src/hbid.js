$(document).ready(function() {
    // Listen for the form submission event
    $('#hbid-form').submit(function(event) {
      // Prevent the form from submitting normally
      event.preventDefault();
  
      // Get the song ID from the form
      var songId = $('#songid').val();
  
      // Call the getHighestBid function in app.js to retrieve the highest bid for the song
      var highestBid = viewHighestBidder(songId);
  
      // Display the highest bid in the message div
      $('#message').html('The highest bid for song ' + songId + ' is ' + highestBid);
    });
  });
  
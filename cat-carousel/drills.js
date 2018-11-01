'use strict';

function main() {
 
  $('.thumbnail').on('click', function (event) {
    $('.hero').html($(event.target).clone());
  });

}

$(main);

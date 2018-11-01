'use strict';

function main() {
  $('.thumbnail').on('click', function (event) {
    console.log(event.target);
  });
}

$(main);

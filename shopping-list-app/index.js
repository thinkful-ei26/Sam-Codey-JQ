'use strict';

function generateNewItem(item) {
 
  return `
    <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `;
}


function main () {
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    let newItem = ($('.js-shopping-list-entry').val());

    const element = generateNewItem(newItem);
    $('.shopping-list').append(element);

  });

  // refactor -> jquery methods to find the specific element
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    console.log(event);
    $(event.currentTarget.parentNode.parentElement.childNodes[1]).toggleClass('shopping-item__checked')
  });

  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget.parentNode.parentElement).remove();
    
  });


}

$(main);
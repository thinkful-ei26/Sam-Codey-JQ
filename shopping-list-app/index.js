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

}

$(main);
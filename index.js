$(function() {
    $("#js-shopping-list-form").find('button').click(event => {
      event.preventDefault();
      let newItem = $('form').find(
      'input[name="shopping-list-entry"]').val();
      $("ul").append(
        `<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>    <button class="shopping-item-delete"><span class="button-label">delete</span></button></div>
        </li>`);
        });
  
    $('ul').on('click','button.shopping-item-toggle',function(event) {
      event.preventDefault();
      $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  
    $('ul').on('click','button.shopping-item-delete',function(event) {
      event.preventDefault();
      $(event.currentTarget).closest('li').remove('li')
    });
  });

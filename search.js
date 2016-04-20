$(".search_menu").on('submit', function(event){
  event.preventDefault();
  var search_query = "";
  var radio_btns = $('.menu_item');

for (var i = 0; i < radio_btns.length; i++) {
  if(radio_btns[i].is(':checked')){
    var value = radio_btns[i].val();
    search_query += 'search=' +value+'&';
    }
  }

  var search_text = $("search_text").val();
  var search_query += 'search_text'+search_textl;

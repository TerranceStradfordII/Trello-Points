$('.list').each(function() {
  var $this = $(this);
  var count = $this.find('.list-card').length;
  var $title = $this.find('.list-title h2');
  var tester = /.*PLACEHOLDER.*/;
  var placeholderIndex = false;

  // Determine the index of the PLACEHOLDER card, if there is one.
  $this.find('.list-card a').each(function(index, el) {
    if (tester.exec($(el).text()) !== null) {
      placeholderIndex = index;
    }
  });

  if (placeholderIndex !== false) {
    var before = placeholderIndex;
    var after = count - placeholderIndex - 1;
    $title.text($title.text() + ' (' + before + ' | ' + after + ')');
  }
  else {
    $title.text($title.text() + ' (' + count + ')');
  }
});
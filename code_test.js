function fetchData(){
  $.ajax({
    url: "https://theme.co/dev-trial/AqsYKrxkGNBsZupFkqQrWwtqGDyWMnApNciyUVp/data.php",
    method: "get"
    }
  ).then(function(data){
    collectData(data);
  });
}

function collectData(data){
  document.body.innerHTML = "<ul class='target'></ul>";
  var elementsString = _.reduce(data, createDataHTML, "");
  $(".target").html(elementsString);
}

function createDataHTML(results, data){
  var classString = _.isUndefined(data._type) ? "" : " class=\"" + data._type + "\"";
  var titleString = _.isUndefined(data.title) ? "" : "<span>" + data.title + "</span>";

  var html = "<li" + classString + ">" + titleString;

  if (!_.isEmpty(data.elements)){
    html += _.reduce(data.elements, createDataHTML, "");
  }
  html += "</li>";
  return results + html;
}


$( document ).ready(function() {
  fetchData();
});

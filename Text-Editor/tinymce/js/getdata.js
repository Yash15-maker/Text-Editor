$(document).ready(function () {
  $("#get-data-form").submit(function (e) {
    var content = tinymce.get("texteditor").getContent();
    var to = $("#topic").val();
    var da = $("#day").val();
    $("#data-container").html(content + " " + to + " " + da);

    return false;
  });
});

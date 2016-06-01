$(document).ready(function () {
  $('button').click(function () {
      $('#survey').append("<ul>" + $("input[name=question]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
  });
  $("body").on('click', '#survey a', function () {
      $(this).closest("ul").remove();
  });
});

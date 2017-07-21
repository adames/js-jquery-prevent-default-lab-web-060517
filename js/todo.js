$(document).ready(function(){
  submitForm()
});

function submitForm(){
  $('form').on("submit", function(event){
    let list = $('#list ol')
    let item = $('#item')
    list.append(`<li>${item.val()}</li>`)
    event.preventDefault();
  })
}

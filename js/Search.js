function search() {
  // Declare variables
  var input, filter,listItem, div,a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  listItem = document.getElementById("listItem");
  div =listItem.getElementsByClassName('movie-list-item');

  // Loop through all divst items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    a = div[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

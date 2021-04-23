function myFunction() {
  var list=document.getElementById("List");
  var listsyle=list.className;
  

  if (listsyle == "List1") {
  	list.classList.remove('List1');

  	list.classList.add('List2');


  }
  else
  {
      list.classList.remove('List2');

    list.classList.add('List1');
  }
}
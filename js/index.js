
//inicio
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");
a4 = document.getElementById("a4");

// Verificando se está checkado e fazendo o btn aparecer 

$("input:checkbox").on('click', function() {
	var $box = $(this);
	if ($box.is(":checked")) {
		targetDiv.style.display = "block";
	  var group = "input:checkbox[name='" + $box.attr("name") + "']";
	  $(group).prop("checked", false);
	  $box.prop("checked", true);
	} else {
		targetDiv.style.display = "none";
	  $box.prop("checked", false);
	}
  });




const targetDiv = document.getElementById("buttonConfirm");
const btn = document.getElementById("toggle");


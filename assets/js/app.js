
// funcion de anadir comentarios
function add()
{
	//tomar texto ingresado del textarea
	var comments = document.getElementById("comment").value;

	//limpiar textarea
	document.getElementById("comment").value = "";

	//contenedor del html
	var cont = document.getElementById("cont");

	//crear un div que contendra cada comentario
	var newComments = document.createElement("div");

	//funcion para deshabilitar el boton si no hay texto
	//variable, cuando su valor es true, osea hay texto y false cuando no lo hay
	
	// var haveText = false;

	//en esta variable se guarda el objeto que representa al elemento que tenga como ID = btn
	//dentro de html
	
	// var noButton = document.getElementById("btn");

	// if(haveText == false)
	// {
	// 	noButton.disable = true;
	// }
	// else
	// {
	// 	noButton.disable = false;
	// }

	//validar que el textarea tenga algun texto
	if (comments.length == 0 || comments == null)
	{
		alert("Debe ingresar algun mensaje..");
		//se debe inabilitar el boton del tweet
		//
		//
		return false;
	}



	//funcion de la hora
	
	// function = myFuction()
	// {
	// 	var d = new Date();
	// 	var n = d.toLocaleTimeString();

	// 	var dat = document.getElementById("cont").innerHTML = n;
	// }
	
	//nodo de texto de textarea
    var textNewComment = document.createTextNode(comments);
    var contenedorElemento = document.createElement("p");
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);
}





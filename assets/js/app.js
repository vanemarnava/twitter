
//funcion para agregar tweet
function add()
{
	//obtener los comentarios
	var comments = document.getElementById("comment").value;
	
	//validar que el textarea tenga texto, si no tiene se desactiva boton tweet
	if (comments.length == 0 || comments == null || comments == "")
	{
		//desactivar boton del tweet
		var boton = getElementById("btn");
		boton.disable = true;
		// document.getElementById("btn").disabled = true;
	}
	else
	{
		//limpiar textarea
		document.getElementById("comment").value = "";
		//crear el contenedor de los comentarios
		var newComment = document.createElement("div");
		//agregar id del div de la seccion donde se publica los tweets
		var contenido = document.getElementById("cont");
		//crear parrafo
		var text = document.createElement("p");
		//crear nodo de texto de textarea
    	var nodoTexto = document.createTextNode(comments);

    	//establecer hora en el comentario
    	//crear un contenedor span para la hora
    	var hour = document.createElement("span");
    	var newHour = new Date();
    	var sHour ="added at  " + newHour.getHours()+":" + newHour.getMinutes();
    	hour.textContent = sHour;

    	//se anaden los hijos
    	text.appendChild(nodoTexto);
    	newComment.appendChild(text);
    	newComment.appendChild(hour);
    	cont.appendChild(newComment);
	}
}

//contador de caracteres
function numWord()
{
	//limite del textarea
	var long = 140;
	var resta = "";
	//variable donde se guarda la cantidad de caracteres del comentario
	var comment = document.getElementById("comment").value.length;

	//restar la longitud de los 140 caracteres con lo que se va ingresando
	resta = long-comment;
	//al id limit se le agrega el valor de la resta
	document.getElementById("limit").value = resta;

	//cambiar color segun la cantidad de caracteres	
	if (resta < 0) 
	{ 
		//si la resta es negativa, el color del contador sera rojo
		limit.style.color = "red";
		//boton deshabilitado
		document.getElementById("btn").disabled=true;
	}
	else if (resta >=0 && resta < 10)
	{ 
		//si es mayor o igual a 0 y menor a 10, cambiar a color naranjo
		limit.style.color = "orange";
		//boton habilitado
		document.getElementById("btn").disabled=false;
	}
	else if (resta >=10 && resta < 20)
	{
		//si es mayor o igual a 10 y menor a 20 es negro
		limit.style.color = "black";
		//boton habilitado
		document.getElementById("btn").disabled=false;
	}
	else
	{
		limit.style.color = "#009af6"; // y sino entonces que vuelva a su color original//
		document.getElementById("btn").disabled=false;
	}

}

// textarea se ajusta al alto del texto para que no tenga scroll
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize()
{
  var big = this;
  setTimeout(function()
  {
    big.style.cssText = 'height:auto; padding:0';
    big.style.cssText = 'height:' + big.scrollHeight + 'px';
  },0);
}





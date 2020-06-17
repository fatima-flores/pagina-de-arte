alert("Bienvenido a esta página de arte");{} //*muestra una ventana de alerta 

function confirmar(url) //* sive para pedir conformacion para visitar una pagina
{
	if(confirm('En esta página encontrarás más sobre Frida Kahlo, te interesa?'))
	{
		window.location=url;
	}
	else
	{
		return false;
	}	
}


function prompter() { //sirve para que el usuario introduzca informacion
var reply = prompt("Bienvenido!, ¿cuál es tu nombre?", "")
alert ( "Es un gusto tenerte aquí " + reply + "!")
}

 
function reloj() {
			//Variables
			horareal = new Date()
			hora = horareal.getHours()
			minuto = horareal.getMinutes()
			segundo = horareal.getSeconds()
			//Codigo para evitar que solo se vea un numero en los segundos
			comprobarsegundo = new String (segundo)
			if (comprobarsegundo.length == 1)
			segundo = "0" + segundo
			//Codigo para evitar que solo se vea un numero en los minutos
			comprobarminuto = new String (minuto)
			if (comprobarminuto.length == 1)
			minuto = "0" + minuto
			//Codigo para evitar que solo se vea un numero en las horas
			comprobarhora = new String (hora)
			if (comprobarhora.length == 1)
			hora = "0" + hora
			// Codigo para mostrar el reloj en pantalla
			verhora = hora + " : " + minuto + " : " + segundo
			document.reloj_javascript.reloj.value = verhora
			setTimeout("reloj()",1000)
		}

		function imprimir() { //sirve para imprimir pantalla
	window.print();
}


/* Author: E.J.P.C.R. - Date: 2015/10/30 */

// Método simple para encriptar la cadena con la clave correspondiente.
function encrypt(str, key) {
	// Cadena base para el cifrado.
	var crypt = "abcdefghijklmnopqrstuvwxyzáéíóú ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚ1234567890@.,;:-+*/$#¿?!¡=()[]{}";
	// Declara e inicializa la variable.
	var res = "";
	// Recorre la longitud de la cadena a cifrar.
	for(var i = 0; i < str.length; i++) {
		// Almacena la posición del carácter.
		var pos = crypt.indexOf(str.charAt(i));
		// Comprueba si la posición del carácter es menor a la longitud de la cadena base del cifrado. 
		if((pos - key) < crypt.length) {
			// Concatena cada carácter cifrado.
			res = res + crypt.charAt(pos + key);
		} else {
			// Concatena cada carácter cifrado.
			res = res + crypt.charAt((pos + key) - crypt.length);
		}
	}
	// Devuelve la cadena cifrada.
	return res;
}

// Método simple para desencriptar la cadena con la clave correspondiente.
function desencrypt(str, key) {
	// Cadena base para el descifrado.
	var crypt = "abcdefghijklmnopqrstuvwxyzáéíóú ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚ1234567890@.,;:-+*/$#¿?!¡=()[]{}";
	// Declara e inicializa la variable.
	var res = "";
	// Recorre la longitud de la cadena a descifrar.
	for(var i = 0; i < str.length; i++) {
		// Almacena la posición del carácter.
		var pos = crypt.indexOf(str.charAt(i));
		// Comprueba si la posición del carácter es menor a cero. 
		if((pos - key) < 0) {
			// Concatena cada carácter descifrado.
			res = res + crypt.charAt((pos - key) + crypt.length);
		} else {
			// Concatena cada carácter descifrado.
			res = res + crypt.charAt(pos - key);
		}
	}
	// Devuelve la cadena descifrada.
	return res;
}
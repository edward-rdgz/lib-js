/* Author: E.J.P.C.R. - Date: 2015/10/30 */

// Remplaza todos los caracteres coincidentes encontrados en la cadena.
function replaceAll(find, replace, str) {
	// Devuelve la cadena con los caracteres remplazados.
	return str.replace(new RegExp(find, 'g'), replace);
}

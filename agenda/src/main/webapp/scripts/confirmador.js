/**
 *  Confirmação de exclusão de contato
 * @author Mateus Briet
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if (resposta === true) {
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}
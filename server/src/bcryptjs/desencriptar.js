// Importamos paquete
const bcrypt = require("bcryptjs");
// Este hash debe venir de tu base de datos, por ejemplo
// Nota: yo sé que este hash es "hunter2", obviamente es para ejemplificar
const palabraSecretaHasheada = "$2a$10$DF3dIU16023jxnoCqbAZT.JveS1j6a72cJavqSABO5./HS1r4jjsq";
const palabraSecretaProporcionadaPorUsuario = "Gelltt23";
// Recuerda. Los argumentos son: texto plano, encriptada, y callback
bcrypt.compare(palabraSecretaProporcionadaPorUsuario, palabraSecretaHasheada, (err, coinciden) => {
	if (err) {
		console.log("Error comprobando:", err);
	} else {
		console.log("¿La contraseña coincide?: " + coinciden);
		console.log("Credenciales: " + palabraSecretaProporcionadaPorUsuario);
		console.log("HASH: " + palabraSecretaHasheada);
	}
});
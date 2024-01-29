
// Importamos paquete
const bcrypt = require("bcryptjs");


// Primero vamos a hashear la contraseña
const palabraSecretaTextoPlano = "dannyxx";
// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

bcrypt.hash(palabraSecretaTextoPlano, rondasDeSal, (err, encriptacion) => {

	
});


const register = async function(req,res){    
    const password = req.body.password;    
        const encryptedPassword = await bcrypt.hash(password, saltRounds)
            let users={       
                "user_name":req.body.userName,       
                "email_address":req.body.email,       
                "password":encryptedPassword
            }        
            pool.query('INSERT INTO players SET ?',users, function (error, results, fields) {      
            if (error) {        
                res.send({          
                "code":400,          
                "failed":"error occurred",          
                "error" : error})      
            } else {        
                res.send({          
                "code":200,          
                "success":"user registered sucessfully"            
            });        
        }    
    });  
}
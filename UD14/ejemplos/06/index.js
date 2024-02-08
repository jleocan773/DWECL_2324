// Envío de EMAIL

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jonyleoncanto@gmail.com', // Cuenta que se usa para el envío
      pass: '*********'  // Poner password
    }
  });
  
  var mailOptions = {
    from: 'juan.gallego@ieslosremedios.org', // Correo remitente
    to: 'juan.gallego@ieslosremedios.org', // Correo destino
    subject: 'Enviando correo desde Node.js',
    html: '<h1>Hola desde Node.js</h1>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });

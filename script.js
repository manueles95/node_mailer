const nodemailer = require('nodemailer')


var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ad.clinicamedica@gmail.com',
    pass: '12trescuatro'
  }
});

var mailOptions = {
  from: 'ad.clinicamedica@gmail.com',
  to: 'manuel.escobarhz@gmail.com, e_oliveros96@hotmail.com',
  subject: 'Ya es 4 20',
  text: 'Y probablemente te lo perdiste...'
}

transporter.sendMail(mailOptions, function(err, ifno){
    if (err){console.log(err)}
})

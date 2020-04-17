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
  to: 'manuel.escobarhz@gmail.com',
  subject: 'TESTING 420',
  text: 'testing'
}

transporter.sendMail(mailOptions, function(err, ifno){
    if (err){console.log(err)}
})

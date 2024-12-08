import {MailtrapClient} from 'mailtrap'

const TOKEN= 'cc4235baf37d8f312496ec2a08067933'
const SENDER_EMAIL='hello@demomailtrap.com'
const RECIPIENT_EMAIL='interestofpeople047@gmail.com'

if(!TOKEN){
    throw new Error('MAILTRAP_TOKEN environment variable is not set')
}


const client =new MailtrapClient({token:TOKEN})


const sender ={name:'Mailtrap Test',email:SENDER_EMAIL}

client.send({
    from:sender,
    to:[{email:RECIPIENT_EMAIL}],
    subject:'Hello from mailtrap',
    text:'welcome from craft AI'

}).then(console.log).catch(console.error)
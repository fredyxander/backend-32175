class msgEmailClass{
    constructor(){
        this.comunicator = new EmailService()
    }
    //metodos
    senMsg(){
        this.comunicator.send("msg")
    }
}


class msgSMSClass{
    constructor(){
        this.comunicator = new SMSService();
    }
    senMsg(){
        this.comunicator.send("msg")
    }
}



class msgClass{
    constructor(instance){
        this.comunicator = instance
    }
}

const emailService = new msgClass(new EmailService());
const smsService = new msgClass(new SmsService());
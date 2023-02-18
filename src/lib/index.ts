import nodemailer from "nodemailer" 

export async function send_magic_link(){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"zozozozeph@gmail.com",
            pass:"igfjmiydovemonyp"
        }
    })
    
    const mail_options = {
        from:"zozozozeph@gmail.com",
        to:"josephdogbevi2002@gmail.com",
        subject:"Testing Ndemailer",
        text:"Hello Bozo"
    }
    
    transporter.sendMail(mail_options, (err, info)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(info)
    })
}
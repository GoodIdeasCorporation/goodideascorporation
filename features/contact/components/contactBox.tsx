import React, { useState } from 'react'
import { Button, Input , Textarea , useDisclosure} from '@nextui-org/react'
import { FaPhoneFlip, FaLocationDot, FaF} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { FaFacebook , FaLine} from "react-icons/fa";
import AlertModal from '../modal/alert';
import axios from 'axios';
import { emailApi , contactInformation } from '@/config/information';

type ContactInfoType = {
  from_name : string 
  from_email : string 
  from_subject:string 
  message : string 
}

const ContactBox : React.FC = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isInvalidEmail , setInvalidEmail]  = useState<boolean>(false);
  const [isInvalidText ,setInvalidText] = useState<boolean>(false)
  const [isLoading ,setLoading] = React.useState<boolean>(false);
  const [contactInfo ,setContactInfo]  = React.useState<ContactInfoType>({
      from_name : "" , 
      from_email : "",
      from_subject: "",
      message : "",
  })
  const verificationTextArea = () => {
    if(!contactInfo.from_name || !contactInfo.from_subject || !contactInfo.message){
      setInvalidText(true);
      return true
    }
    return false
  }
  const validateEmail = (value:any) => contactInfo.from_email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (contactInfo.from_email === "") return false;

    return validateEmail(contactInfo.from_email) ? false : true;
  }, [contactInfo.from_email]);

  

  const sendEmail = async (e:any) => {
    setLoading(true);
    const data = {
      service_id : emailApi.serviceId ,
      template_id :  emailApi.templateId,
      user_id:  emailApi.publicKey,
      template_params: {
        from_name :contactInfo.from_name,
        from_email : contactInfo.from_email,
        from_subject:contactInfo.from_subject,
        to_name : "Good Ideas Corporation Co., Ltd.",
        message : contactInfo.message
      }
    }

    if(verificationTextArea()){
      setLoading(false)
      return 
    }
    if(!validateEmail(contactInfo.from_email)){
      setInvalidText(false)
      setInvalidEmail(true)
      setLoading(false)
      return 
    }

    setInvalidText(false)
    setInvalidEmail(false)
    try{
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send' , data)
      if(res.data == "OK") {
          console.log(res.data)
          setContactInfo({
            from_name : "" , 
            from_email : "",
            from_subject: "",
            message : "",
          })
          onOpen()
          setLoading(false)
      }
    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  const handleContactInfo = (field:string , e:string) => {
    setContactInfo((prev:any) => ({...prev,  [field] : e}));
  }
  return (
    <section className='w-full flex flex-col min-[1000px]:flex-row  min-[1000px]:h-auto min-[700px]:h-[1400px] bg-white drop-shadow-xl'>
      <div className='min-[1000px]:w-2/4  w-full bg-gray-50 border-r-1 p-8  flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>Send Us A Message</h1>
        <div className='flex flex-col gap-5 pt-5'>
          <form onSubmit={sendEmail}>
            <Input  
            label="Name" 
            variant='underlined' 
            isInvalid = {isInvalidText }
            errorMessage =  {isInvalidText && "Please Enter your name."}
            value={contactInfo.from_name} 
            onChange={(e:any) => handleContactInfo("from_name" , e.target.value)}/>

            <Input 
            type="email" 
            label="Email"  
            variant='underlined' 
            isInvalid = {isInvalid  || isInvalidEmail} 
            value={contactInfo.from_email} 
            errorMessage={isInvalid ? "Please enter a valid email." : isInvalidEmail && "Please enter Email"}
            onChange={(e:any) => handleContactInfo("from_email" , e.target.value)}/>
            
            <Input 
            label = "Subject" 
            variant='underlined' 
            isInvalid = {isInvalidText}
            value={contactInfo.from_subject}
            errorMessage =  {isInvalidText && "Please Enter your subject."} 
            onChange={(e:any) => handleContactInfo("from_subject" , e.target.value)}/>

            <Textarea
              isRequired
              label="Message"
              className="max-w-full"
              variant='underlined'
              isInvalid = {isInvalidText}
              errorMessage =  {isInvalidText && "Please Enter your message."} 
              value={contactInfo.message}
              onChange={(e:any) => handleContactInfo("message" , e.target.value)}
            />
          </form>
         
        </div>
        <div className='w-[180px] h-[60px] mt-5'>
          <Button 
          onPress={sendEmail} 
          color='primary' 
          className='w-full h-full text-lg shadow-lg rounded-none' 
          endContent  = {<IoChevronForward/>}
          isLoading = {isLoading}
          >Contact Us
          </Button>
        </div>
       
      </div>
      <div className='min-[1000px]:w-2/4 w-full p-8'>
        <h1 className='text-3xl font-semibold' >Contact Info</h1>
        <div className='pt-10'>
          <div className='flex justify-between'>
            <div className=' flex gap-5'>
              <div className='w-[50px] h-[50px] rounded-full bg-blue-500 flex items-center justify-center text-white'>
                <FaPhoneFlip/>
              </div>
              <div>
                <p className='text-xl font-semibold'>Call Us</p>
                <p className='text-lg'>{contactInformation.phone}</p>
              </div>
            </div>
            <div className=' flex gap-5'>
              <div className='w-[50px] h-[50px] rounded-full bg-blue-500 flex items-center justify-center text-white'>
                <FaLocationDot/>
              </div>
              <div>
                <p className='text-xl font-semibold'>Our Location</p>
                <p className='text-lg w-[200px]'>{contactInformation.address}</p>
              </div>
            </div>
          </div>
          <div className=' flex gap-5'>
              <div className='w-[50px] h-[50px] rounded-full bg-blue-500 flex items-center justify-center text-white'>
                <MdEmail/>
              </div>
              <div>
                <p className='text-xl font-semibold'>Our Email</p>
                <p className='text-lg'>{contactInformation.directEmail}</p>
              </div>
          </div>
        </div>
        <div className='pt-[80px]'>
          <h1 className='text-3xl font-semibold'>Follow Us</h1>
          <div className='pt-5 flex gap-5'>
              <Button isIconOnly variant='light' className='text-blue-500' onClick={() => window.open(contactInformation.facebook, '_blank')}>
                  <FaFacebook size={45} />
              </Button>
              <Button isIconOnly variant='light' className='text-green-500' onClick={() => window.open(contactInformation.line, '_blank')}>
                  <FaLine size={45} />
              </Button>
          </div>
        </div>
      </div>
      <AlertModal
      isOpen = {isOpen}
      onOpen={onOpen}
      onOpenChange={onOpenChange}
      />
    </section>
  )
}
export default ContactBox

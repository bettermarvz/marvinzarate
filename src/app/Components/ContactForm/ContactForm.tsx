"use client";

import React, { useState } from "react";
import { TextInput, Textarea, Button, Divider } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from '@emailjs/browser';


const ContactForm = () => {

  const [isSending, setIsSending] = useState(false);
	
  const form = useForm({
		initialValues: {
			name_from: "",
			email_from: "",
			message: "",

		},
	});
	
  const formSubmitHandler = (e:any) =>{
    e.preventDefault();
    setIsSending(true)

    console.log(e.target, form.values)

    emailjs.sendForm('service_ih957t2', 'template_hbj7ulc', e.target, '-SIreA8nlJDbD1sHw')
    .then(function(response:any) {
      console.log('SUCCESS!', response.status, response.text);
      setIsSending(false)
   }, function(error:any) {
      console.log('FAILED...', error);
      setIsSending(false)
   });
  }
  return (
		<div className = 'w-full h-full flex justify-center items-center flex-col gap-10'><form
			className=" w-3/4"
			onSubmit={(e) => formSubmitHandler(e)}
		>
			<TextInput

				size="xl"
				label="Your name"
				placeholder="Your name"
        name = 'name_from'
				{...form.getInputProps("name_from")}
			/>
			<TextInput
				mt="md"
				size="xl"
				label="Your email"
				placeholder="Your email"
        name='email_from'
				{...form.getInputProps("email_from")}
			/>
			<Textarea
				mt="md"
				size="xl"
				label="Your message"
				placeholder="Your message"
        name='message'
        {...form.getInputProps("message")}
			/>
			<Button 
      loading={isSending}
        type='submit'
        mt="md"
        size='xl' 
        fullWidth 
        variant="filled" 
        color="#FF8700"
        className='bg-[#FF8700]'>
				Send
			</Button>
		</form>
    <p>or send me an email at <a href="mailto:zarate.marvin@gmail.com">zarate.marvin@gmail.com</a>
      </p>
    <p></p>
    </div>
	);
};

export default ContactForm;

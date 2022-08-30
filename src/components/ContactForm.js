import React from 'react'
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {

    function validateForm(ime, email, mobile, question) {
        var rezultat = "ERROR\n\n";
        if (ime.length < 3) {
            rezultat += "Name must contain at least 3 characters!!\n"
        }
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            rezultat += "Email must be in valid format!\n"
        }
        if (!(mobile.match(/^\d{10}$/))) {
            rezultat += "Telephone must be 10 digits long and without letters!\n"
        }
        if (question.length < 10) {
            rezultat += "Question must contain at least 10 characters!\n"
        }
        if (rezultat === "ERROR\n\n") {
            return true;
        } else {
            alert(rezultat);
            return false;
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        const ime = e.target.Name.value;
        const email = e.target.Email.value;
        const mobile = e.target.MobileNumber.value;
        const question = e.target.Question.value;
        if (validateForm(ime, email, mobile, question)) {

            emailjs.sendForm('service_rqzjw9v', 'gmailTemplate', e.target, 'user_HZykz9X0oAPh7hLknywvx')
                .then((result) => {
                    alert("Successfully sent question!\n\nName: " + ime + "\nEmail: " + email + "\nMobile phone: " + mobile + "\nQuestion: " + question)
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
        }
    }

    return (
        <>
            <h2>Contact us</h2>
            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="Name" />
                <input type="text" placeholder="Email" name="Email" />
                <input type="tel" placeholder="Mobile number" name="MobileNumber" />
                <textarea name="Question" placeholder="Question" />

                <input type="submit" className="submit"/>
            </form >
        </>

    )
}

export default ContactForm
import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArchitectButton from '../../components/button/ArchitectButton';
import {
  ContactContainer,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  SuccessMessage,
  RecaptchaWrapper
} from './Contact.styles';
import topImg from '../../assets/images/living-room.jpg';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const formRef = useRef();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Proszę wpisać adres email.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Proszę wpisać poprawny adres email.');
      return;
    }

    if (!captcha) {
      setError('Proszę zweryfikować, że nie jesteś robotem.');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_4i2pydj',
        'template_ab4cvss',
        formRef.current,
        'ZCvu6YfG1l3tmISDU'
      );

      if (result.status === 200) {
        setSuccess('Wiadomość została wysłana. Dziękujemy za kontakt!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setCaptcha(null);
      } else {
        setError('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    }
  };

  return (
    <ContactContainer>
      <PageHeader title="KONTAKT" backgroundImage={topImg} />
      <ContactForm ref={formRef} onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Imię i nazwisko</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Numer telefonu</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Wiadomość</Label>
          <TextArea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormGroup>
        <RecaptchaWrapper>
          <ReCAPTCHA
            sitekey="6Lc2Vx8qAAAAANBQ7MW7Oxm22M7ywNYYjOW13nC9"
            onChange={setCaptcha}
          />
        </RecaptchaWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <ArchitectButton name="WYŚLIJ" type="submit" />
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;

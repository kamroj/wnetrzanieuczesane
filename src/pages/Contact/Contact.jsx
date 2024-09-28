import React, { useState, useRef } from 'react';
import { useQuery } from "@tanstack/react-query";
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import sanityClient from '../../SanityClient';
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
  RecaptchaWrapper,
  Select
} from './Contact.styles';
import { GridLine, GridLines } from '../../components/GridLines/GridLines.styles';
import Loading from '../Loading/Loading';

const fetchContactContent = async () => {
  return sanityClient.fetch(`
    *[_type == "contact"][0] {
      title,
      "topImageUrl": topImage.asset->url
    }
  `);
};

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [floorPlanLink, setFloorPlanLink] = useState('');
  const [roomsToDesign, setRoomsToDesign] = useState('');
  const [investmentStatus, setInvestmentStatus] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');
  const [offerType, setOfferType] = useState('PODSTAWOWA');
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const formRef = useRef();

  const { data: contactContent, error: fetchError, isLoading } = useQuery({
    queryKey: ["contactContent"],
    queryFn: fetchContactContent,
  });

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name) {
      setError('Proszę wpisać imię i nazwisko.');
      return;
    }

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

    const templateParams = {
      name,
      email,
      phone,
      roomsToDesign,
      investmentStatus,
      projectDeadline,
      message,
      floorPlanLink,
      offerType
    };

    try {
      const result = await emailjs.send(
        'service_4i2pydj',
        'template_ab4cvss',
        templateParams,
        'ZCvu6YfG1l3tmISDU'
      );

      if (result.status === 200) {
        setSuccess('Wiadomość została wysłana. Dziękujemy za kontakt!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setFloorPlanLink('');
        setRoomsToDesign('');
        setInvestmentStatus('');
        setProjectDeadline('');
        setOfferType('PODSTAWOWA');
        setCaptcha(null);
      } else {
        setError('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    }
  };

  if (isLoading) return <Loading />;
  if (fetchError) return <div>Error loading content: {fetchError.message}</div>;

  return (
    <ContactContainer>
      <PageHeader title={contactContent.title || "KONTAKT"} backgroundImage={contactContent.topImageUrl} />
      <ContactForm ref={formRef} onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Imię i nazwisko *</Label>
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
          <Label htmlFor="offerType">Oferta</Label>
          <Select
            id="offerType"
            name="offerType"
            value={offerType}
            onChange={(e) => setOfferType(e.target.value)}
          >
            <option value="PODSTAWOWA">PODSTAWOWA</option>
            <option value="KOMPLEKSOWA">KOMPLEKSOWA</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="floorPlanLink">Link do rzutu nieruchomości (2D)</Label>
          <Input
            type="text"
            id="floorPlanLink"
            name="floorPlanLink"
            value={floorPlanLink}
            onChange={(e) => setFloorPlanLink(e.target.value)}
            placeholder="Proszę dodać link do pliku (np. Google Drive, Dropbox)"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="roomsToDesign">Pomieszczenia do zaprojektowania</Label>
          <TextArea
            id="roomsToDesign"
            name="roomsToDesign"
            value={roomsToDesign}
            onChange={(e) => setRoomsToDesign(e.target.value)}
            placeholder="Wszystkie lub kuchnia, salon, łazienka itp."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="investmentStatus">Stan inwestycji</Label>
          <Input
            type="text"
            id="investmentStatus"
            name="investmentStatus"
            value={investmentStatus}
            onChange={(e) => setInvestmentStatus(e.target.value)}
            placeholder="np. stan surowy, stan deweloperski, do remontu"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="projectDeadline">Termin projektu</Label>
          <Input
            type="text"
            id="projectDeadline"
            name="projectDeadline"
            value={projectDeadline}
            onChange={(e) => setProjectDeadline(e.target.value)}
            placeholder="Do kiedy projekt ma być wykonany"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Wiadomość</Label>
          <TextArea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Dodatkowe informacje bądź pytania"
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
      <GridLines className="line-on-very-bottom">
        <GridLine />
      </GridLines>
    </ContactContainer>
  );
}

export default Contact;
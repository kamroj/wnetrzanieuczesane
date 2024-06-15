// Home.js
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import sanityClient from "../../SanityClient";
import Loading from "../Loading/Loading";

import logo from "../../assets/images/logo-white2.png";
import quote from "../../assets/images/quote.png";
import scretchImage from "../../assets/images/scretch.png";
import werkaPhoto from "../../assets/images/werka-photo.png";

import { useNavigate } from "react-router-dom";
import ArchitectButton from "../../components/button/ArchitectButton";
import "../GridLines.scss";
import "./AboutProjects.scss";
import "./Gallery.scss";
import "./Home.scss";
import "./Quote.scss";
import "./AboutCompany.scss";

const fetchSlides = async () => {
  const data = await sanityClient.fetch(
    '*[_type == "home"]{slides[]{asset->{url}}}'
  );
  return (
    data[0]?.slides.map((slide) => ({
      original: slide.asset.url,
      thumbnail: slide.asset.url,
    })) || []
  );
};

function Home() {
  const navigate = useNavigate();

  const {
    data: images,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading images</div>;

  return (
    <div className="home-container">
      <section className="gallery-container">
        <div className="grid-lines grid-lines-vertical grid-lines-padding-menu line-on-very-top">
          <span className="g-line-vertical line-left"></span>
          <span className="g-line-vertical line-center"></span>
          <span className="g-line-vertical line-right"></span>
        </div>
        <ReactImageGallery
          autoPlay={true}
          slideInterval={5000}
          additionalClass="gallery-container_gallery"
          items={images}
          showNav={false}
          showThumbnails={false}
          slideDuration={0}
          disableSwipe={true}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        <img src={logo} alt="dimensions" className="gallery-container__logo" />
      </section>

      <section className="quote-container">
        <div className="quote-image-container">
          <img
            src={quote}
            alt="quote-left"
            className="quote-image-container__quote-img quote-image-container__quote-img--left"
          />
        </div>
        <div className="quotation-container">
          <div className="quotation-container__sentence">
            Siła dobrego projektu tkwi w nas i w naszej zdolności postrzegania
            świata za pomocą uczucia i rozumu. <br />
            Dobry projekt architektoniczny jest zmysłowy. <br />
            Dobry projekt architektoniczny jest mądry.
          </div>
          <div className="quotation-container__author">
            Peter Zumthor, Myślenie architekturą
          </div>
        </div>
        <div className="quote-image-container">
          <img
            src={quote}
            alt="quote-left"
            className="quote-image-container__quote-img quote-image-container__quote-img--right"
          />
        </div>
      </section>
      <section className="about-projects-container">
        <div className="grid-lines grid-lines-vertical">
          <span className="g-line-vertical line-left g-line-vertical-black"></span>
          <span className="g-line-vertical line-center g-line-vertical-black"></span>
          <span className="g-line-vertical line-right g-line-vertical-black"></span>
        </div>
        <div className="about-projects-content-container">
          <div className="about-projects-content-container header">
            OD PROJEKTU DO REALIZACJI
          </div>
          <div className="about-projects-content-container content">
            Specjalizuję się w dostarczaniu wyjątkowych i spersonalizowanych
            projektów, które wyróżniają się dzięki mojej innowacyjności i
            kreatywności. Współpracuję z klientami na każdym etapie – od
            pomysłu, przez rozwijanie koncepcji, aż po finalną realizację.
            Dzięki mojemu doświadczeniu i pasji, szybko przekształcam wizje w
            rzeczywistość, zachowując najwyższe standardy estetyki i
            funkcjonalności. Zawsze jestem gotowa doradzać i wspierać moich
            klientów, zapewniając, że końcowy efekt przewyższy ich oczekiwania.
          </div>
          <div className="about-projects-content-container button-container">
            <ArchitectButton
              name="PROJEKTY"
              onClick={() => navigate("/portfolio")}
            />
          </div>
        </div>
        <div className="about-projects-scretch-container">
          <img
            src={scretchImage}
            alt="quote-background"
            className="about-projects-scretch-container__img"
          />
        </div>
      </section>
      <section className="about-company-container">
        <div className="grid-lines grid-lines-vertical">
          <span className="g-line-vertical line-left g-line-vertical"></span>
          <span className="g-line-vertical line-center g-line-vertical"></span>
          <span className="g-line-vertical line-right g-line-vertical"></span>
        </div>
        <div className="about-company-photo-container">
          <img
            src={werkaPhoto}
            alt="werka"
            className="about-company-photo-container__img"
          />
          <div className="about-company-signature-container">
            Weronika Rojek
          </div>
        </div>
        <div className="about-company-content-container">
          <div className="about-company-content-container__header">
            Filozofia w prostocie i jakości designu
          </div>
          <div className="about-company-content-container__content">
            Nazywam mój styl "żywym minimalizmem". Żywy minimalizm to nie
            kwestia wyglądu czy wizualnej estetyki. Odnosi się do wewnętrznych
            uczuć, do Twojego prawdziwego ja. To miejsce, w którym czujesz się
            komfortowo i które naprawdę odzwierciedla Ciebie.
          </div>
          <div className="about-company-content-container__button">
            <ArchitectButton
              isBlack={true}
              name="O MNIE"
              onClick={() => navigate("/portfolio")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

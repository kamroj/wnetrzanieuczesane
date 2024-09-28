import React from 'react';
import { useQuery } from "@tanstack/react-query";
import sanityClient from '../../SanityClient';
import PageHeader from '../../components/PageHeader/PageHeader';
import { GridLine, GridLines } from '../../components/GridLines/GridLines.styles';
import {
  OfferContainer,
  OfferContent,
  OfferSection,
  OfferTitle,
  OfferList,
  OfferItem,
  OfferItemTitle,
  OfferItemContent,
  ContactInfo,
  ContactLink,
  OfferWrapper
} from './Offer.styles';
import Loading from '../Loading/Loading';

const fetchOffer = async () => {
  return sanityClient.fetch(`
    *[_type == "offer"][0] {
      title,
      "topImageUrl": topImage.asset->url,
      basicOffer,
      comprehensiveOffer
    }
  `);
};

const Offer = () => {
  const { data: offerData, error, isLoading } = useQuery({
    queryKey: ["offer"],
    queryFn: fetchOffer,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading offer: {error.message}</div>;

  const renderOfferSection = (title, items, isComprehensive = false) => (
    <OfferSection $isComprehensive={isComprehensive}>
      <OfferTitle>{title}</OfferTitle>
      <OfferList>
        {items.map((item, index) => (
          <OfferItem key={index}>
            <OfferItemTitle>{item.title}</OfferItemTitle>
            <OfferItemContent>{item.content}</OfferItemContent>
          </OfferItem>
        ))}
      </OfferList>
    </OfferSection>
  );

  return (
    <OfferContainer>
      <PageHeader title={offerData.title || "OFERTA"} backgroundImage={offerData.topImageUrl} />
      <OfferWrapper>
        <GridLines className="line-on-very-bottom" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}>
          <GridLine />
        </GridLines>
        <OfferContent>
          {renderOfferSection("PODSTAWOWA", offerData.basicOffer)}
          {renderOfferSection("KOMPLEKSOWA", offerData.comprehensiveOffer, true)}
        </OfferContent>
        <ContactInfo>
          Masz pytania odnośnie zakresu? Zapraszamy do <ContactLink to="/contact">kontaktu</ContactLink>.
        </ContactInfo>
      </OfferWrapper>
    </OfferContainer>
  );
};

export default Offer;
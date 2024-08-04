import React from 'react';
import { Fade } from "react-awesome-reveal";
import {
    ProcessContainer,
    HeaderImage,
    HeaderTitle,
    ProcessContent,
    ProcessStep,
    StepNumber,
    StepContent,
    StepTitle,
    StepDescription,
    AdditionalInfo,
    ContactEmail
} from './ProcessDesign.styles';
import topImg from "../../assets/images/portfolio/portfolio-header-img.jpg";
import PageHeader from '../../components/PageHeader/PageHeader';

const steps = [
    {
        title: "Rzut nieruchomości (2D)",
        description: "wraz ze spisem pomieszczeń i ich metrażem"
    },
    {
        title: "Informacje o pomieszczeniach",
        description: "które mają zostać zaprojektowane"
    },
    {
        title: "Informacje o stanie inwestycji",
        description: "w realizacji, stan deweloperski, do remontu"
    },
    {
        title: "Termin projektu",
        description: "informacje odnośnie terminu, na kiedy potrzebujesz projekt"
    }
];

function ProcessDesign() {
    return (
        <ProcessContainer>
            <PageHeader title="PROCES PROJEKTOWANI" backgroundImage={topImg} />
            <ProcessContent>
                <Fade cascade damping={0.3}>
                    {steps.map((step, index) => (
                        <ProcessStep key={index}>
                            <StepNumber>{index + 1}</StepNumber>
                            <StepContent>
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </StepContent>
                        </ProcessStep>
                    ))}
                </Fade>
                <AdditionalInfo>
                    <Fade delay={500}>
                        <p>Komplet informacji prześlij na maila</p>
                        <ContactEmail>wnetrza.nieuczesane@gmail.com</ContactEmail>
                    </Fade>
                </AdditionalInfo>
            </ProcessContent>
        </ProcessContainer>
    );
}

export default ProcessDesign;
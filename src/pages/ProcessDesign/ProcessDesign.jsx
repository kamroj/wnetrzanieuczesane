import React from 'react';
import { useQuery } from "@tanstack/react-query";
import sanityClient from '../../SanityClient';
import PageHeader from '../../components/PageHeader/PageHeader';
import Loading from '../Loading/Loading';
import {
  ProcessContainer,
  ProcessContent,
  ProcessStep,
  StepDiamond,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  StepImageContainer,
  StepImage,
  StepDivider,
  GridLineWrapper,
  ProcessGridLines,
  ProcessGridLine
} from './ProcessDesign.styles';

const fetchDesignProcess = async () => {
  return sanityClient.fetch(`
    *[_type == "designProcess"][0] {
      title,
      "topImageUrl": topImage.asset->url,
      steps[] {
        stepTitle,
        description,
        "imageUrl": image.asset->url
      }
    }
  `);
};

function ProcessDesign() {
  const { data: designProcess, error, isLoading } = useQuery({
    queryKey: ["designProcess"],
    queryFn: fetchDesignProcess,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading design process: {error.message}</div>;

  return (
    <ProcessContainer>
      <PageHeader title={designProcess.title || "PROCES PROJEKTOWANIA"} backgroundImage={designProcess.topImageUrl} />
      <GridLineWrapper>
        <ProcessGridLines>
          <ProcessGridLine />
        </ProcessGridLines>
        <ProcessContent>
          {designProcess.steps.map((step, index) => (
            <React.Fragment key={index}>
              <StepDivider>
                <StepDiamond>
                  <StepNumber>{index + 1}</StepNumber>
                </StepDiamond>
              </StepDivider>
              <ProcessStep>
                <StepContent>
                  <StepTitle>{step.stepTitle}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
                <StepImageContainer>
                  <StepImage src={step.imageUrl} alt={step.stepTitle} />
                </StepImageContainer>
              </ProcessStep>
            </React.Fragment>
          ))}
        </ProcessContent>
      </GridLineWrapper>
      <ProcessGridLines className="line-on-very-bottom">
        <ProcessGridLine />
      </ProcessGridLines>
    </ProcessContainer>
  );
}

export default ProcessDesign;
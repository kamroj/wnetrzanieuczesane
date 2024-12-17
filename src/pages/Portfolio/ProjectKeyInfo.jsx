import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyInfoContainer,
  KeyInfoGrid,
  KeyInfoItem,
  KeyInfoLabel,
  KeyInfoValue
} from './ProjectKeyInfo.styles';

const ProjectKeyInfo = ({ projectDetails }) => {
  const { area, buildingType, roomCount, purpose } = projectDetails;
  
  return (
    <KeyInfoContainer>
      <KeyInfoGrid>
        <KeyInfoItem>
          <KeyInfoLabel>Powierzchnia:</KeyInfoLabel>
          <KeyInfoValue>{area}</KeyInfoValue>
        </KeyInfoItem>
        <KeyInfoItem>
          <KeyInfoLabel>Budownictwo:</KeyInfoLabel>
          <KeyInfoValue>{buildingType}</KeyInfoValue>
        </KeyInfoItem>
        <KeyInfoItem>
          <KeyInfoLabel>Liczba pokoi:</KeyInfoLabel>
          <KeyInfoValue>{roomCount}</KeyInfoValue>
        </KeyInfoItem>
        <KeyInfoItem>
          <KeyInfoLabel>Przeznaczenie:</KeyInfoLabel>
          <KeyInfoValue>{purpose}</KeyInfoValue>
        </KeyInfoItem>
      </KeyInfoGrid>
    </KeyInfoContainer>
  );
};

ProjectKeyInfo.propTypes = {
  projectDetails: PropTypes.shape({
    area: PropTypes.string.isRequired,
    buildingType: PropTypes.string.isRequired,
    roomCount: PropTypes.string.isRequired,
    purpose: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectKeyInfo;
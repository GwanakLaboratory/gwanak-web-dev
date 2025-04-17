import React from 'react';
import { S } from './style';

type TechCardProps = {
  img: string;
  title: string;
  detail: string;
};

const TechCard = ({ img, title, detail }: TechCardProps) => {
  const formattedtitle = title.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  const formattedDetail = detail.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <S.TechCardContainer className="layout-padding">
      <S.TechCardHeadContainer>
        <S.TechCardTitleContainer>
          <S.TechCardTitleText>{formattedtitle}</S.TechCardTitleText>
          <S.TechCardHorizontalBox />
        </S.TechCardTitleContainer>
        <S.TechCardImg src={img} alt="icon" />
      </S.TechCardHeadContainer>
      <S.TechCardTailContainer>
        <S.TechCardDescriptionText>{formattedDetail}</S.TechCardDescriptionText>
      </S.TechCardTailContainer>
    </S.TechCardContainer>
  );
};

export default TechCard;

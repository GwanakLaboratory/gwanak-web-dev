import Text from '../../common/Text';
import { S } from './style';

type DescriptionBoxProps = {
  title: string;
  subtitle?: string[];
};

const DescriptionBox = ({ title, subtitle }: DescriptionBoxProps) => {
  return (
    <S.DescriptionContainer className="layout-padding">
      <S.DescriptionBoxTextWrapper>
        <S.SubtitleTextWrapper>
          {subtitle
            ? subtitle.map((item, key) => {
                const length = subtitle.length;
                if (length === 1) {
                  return (
                    <Text color="White" typograph="sm_bold" key={key}>
                      {item}
                    </Text>
                  );
                } else {
                  return (
                    <Text
                      color={key === 0 ? 'Grey700' : 'White'}
                      typograph="sm_bold"
                      key={key}
                    >
                      {item}
                    </Text>
                  );
                }
              })
            : ''}
        </S.SubtitleTextWrapper>
        <S.DescriptionBoxTitleText>{title}</S.DescriptionBoxTitleText>
      </S.DescriptionBoxTextWrapper>
    </S.DescriptionContainer>
  );
};

export default DescriptionBox;

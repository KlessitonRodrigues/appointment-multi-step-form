import { Column, Row } from "src/lib/base/containers/Flex";
import { RoundedImageBox } from "src/lib/base/images/ImageBox";
import AvatarImg1 from "src/../public/images/png/doctor_1.png";
import Text from "src/lib/base/text/Text_2";
import { SelectableCard } from "src/lib/base/cards/Card";
import { IDoctorModel } from "src/constants/models";

type IDoctorCard = {
  data?: IDoctorModel;
  selected?: boolean;
};

const DoctorCard = (props: IDoctorCard) => {
  const { data, selected } = props;

  return (
    <SelectableCard selected={selected}>
      <Row>
        <RoundedImageBox src={AvatarImg1} className="max-w-16" />
        <Column flexY="start" gap={0}>
          <Text fs="lg">{data?.name}</Text>
          <Text fs="sm" fo="60">
            {data?.specialty}
          </Text>
        </Column>
      </Row>
      <Row gap={1} className="mt-4">
        <Text tag="span" fo="50" inline>
          A partir de
        </Text>
        <Text tag="span" fc="blue" inline>
          R$ {data?.startPrice}
        </Text>
      </Row>
    </SelectableCard>
  );
};

export default DoctorCard;

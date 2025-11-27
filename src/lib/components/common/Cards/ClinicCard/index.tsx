import { Column, Row } from "src/lib/base/containers/Flex";
import { ImageBox } from "src/lib/base/images/ImageBox";
import ClinicImage1 from "src/../public/images/png/clinic_1.png";
import Text from "src/lib/base/text/Text_2";
import { PiMapPin } from "react-icons/pi";
import { SelectableCard } from "src/lib/base/cards/Card";

type IClinicCard = {
  name?: string;
  address?: string;
  distance?: string;
  selected?: boolean;
};

const ClinicCard = (props: IClinicCard) => {
  const { name, address, distance, selected } = props;

  return (
    <SelectableCard selected={selected}>
      <ImageBox src={ClinicImage1} />
      <Text fs="lg">{name}</Text>
      <Row flexX="start" gap={4}>
        <PiMapPin size={28} className="text-blue-500" />
        <Column flexY="start" gap={0}>
          <Text fo="50" fs="sm">
            {distance}
          </Text>
          <Text fo="60">{address}</Text>
        </Column>
      </Row>
    </SelectableCard>
  );
};

export default ClinicCard;

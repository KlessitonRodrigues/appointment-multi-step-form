import { Row } from "src/lib/base/containers/Flex";
import Text from "src/lib/base/text/Text_2";
import { SelectableCard } from "src/lib/base/cards/Card";
import { IPaymentModel } from "src/constants/models";

type IPaymentCard = {
  icon?: React.ReactNode;
  data?: IPaymentModel;
  selected?: boolean;
  onSelect?: () => void;
};

const PaymentCard = (props: IPaymentCard) => {
  const { data, icon, selected, onSelect } = props;

  return (
    <SelectableCard selected={selected} onClick={onSelect}>
      <Row gap={4}>
        <Text fc="blue">{icon}</Text>
        <Text fs="xl">{data?.name}</Text>
      </Row>
    </SelectableCard>
  );
};

export default PaymentCard;

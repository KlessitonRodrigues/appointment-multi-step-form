import { Row } from "src/lib/base/containers/Flex";
import Text from "src/lib/base/text/Text_2";
import { SelectableCard } from "src/lib/base/cards/Card";
import { IPaymentModel } from "src/constants/models";

type IPaymentCard = {
  icon?: React.ReactNode;
  data?: IPaymentModel;
  selected?: boolean;
};

const PaymentCard = (props: IPaymentCard) => {
  const { data, icon, selected } = props;

  return (
    <SelectableCard selected={selected}>
      <Row gap={4}>
        <Text fc="blue">{icon}</Text>
        <Text fs="xl">{data?.name}</Text>
      </Row>
    </SelectableCard>
  );
};

export default PaymentCard;

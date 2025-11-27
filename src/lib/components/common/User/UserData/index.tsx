import { Column, Row } from "src/lib/base/containers/Flex";
import { ImageBox } from "src/lib/base/images/ImageBox";
import AvatarImage1 from "src/../public/images/png/avatar_2.png";
import Text from "src/lib/base/text/Text_2";

type IUserData = {
  name?: string;
  avatarSrc?: any;
};

export const UserData = (props: IUserData) => {
  const { name = "John Doe", avatarSrc = AvatarImage1 } = props;
  return (
    <Row className="w-fit" gap={4}>
      <ImageBox src={avatarSrc} className="w-20" />
      <Column flexY="start" gap={0}>
        <Text fo="50">Bem Vindo</Text>
        <Text fc="blue" fs="lg">
          {name}
        </Text>
      </Column>
    </Row>
  );
};

import { Column, Row } from "src/lib/base/containers/Flex";
import { PageFull } from "src/lib/base/containers/Page";
import Text from "src/lib/base/text/Text_2";
import { RoundedImageBox } from "src/lib/base/images/ImageBox";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <PageFull className="bg-bg1">
      <Row resposive="md" className="m-auto gap-[6rem]">
        <RoundedImageBox
          src={"/images/png/home_doctor_1.png"}
          className="max-w-[22rem]"
        />
        <Column gap={4} flexX="start" className="h-fit">
          <Text fs="2xl">Agende sua consulta de forma simples</Text>
          <Text fo="70">
            Escolha a melhor data, horário e clínica disponível e conclua seu
            agendamento em poucos passos. Nosso processo é rápido, intuitivo e
            feito para facilitar o seu dia a dia.
          </Text>
          <Link href="/appointment">
            <ButtonBlue>Agendar</ButtonBlue>
          </Link>
        </Column>
      </Row>
    </PageFull>
  );
};

export default WelcomePage;

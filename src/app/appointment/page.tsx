import { Column, Row } from "src/lib/base/containers/Flex";
import { PageFull } from "src/lib/base/containers/Page";
import Text from "src/lib/base/text/Text_2";
import DoctorImage1 from "src/../public/images/png/doctor_1.png";
import { RoundedImageBox } from "src/lib/base/images/ImageBox";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { Card } from "src/lib/base/cards/Card";
import { UserData } from "src/lib/components/common/User/UserData";
import { VerticalNav } from "src/lib/base/navigation/FormSteps";
import {
  PiArticle,
  PiCalendarDots,
  PiStethoscope,
  PiWallet,
} from "react-icons/pi";

const AppointmentPage = () => {
  return (
    <PageFull>
      <Row resposive="lg" flexY="stretch" className="m-auto">
        <Card className="lg:w-1/4">
          <UserData />
          <VerticalNav
            steps={[
              {
                title: "Agendamento",
                icon: <PiCalendarDots size={24} />,
                disabled: false,
              },
              {
                title: "Médico",
                icon: <PiStethoscope size={24} />,
                disabled: true,
              },
              {
                title: "Forma de Pagamento",
                icon: <PiWallet size={24} />,
                disabled: true,
              },
              {
                title: "Resumo",
                icon: <PiArticle size={24} />,
                disabled: true,
              },
            ]}
          />
        </Card>
        <Card className="lg:w-3/4">
          <RoundedImageBox src={DoctorImage1} className="max-w-[22rem]" />
          <Column gap={4} flexY="start" className="h-fit">
            <Text fs="2xl">Agende sua consulta de forma simples</Text>
            <Text fo="70">
              Escolha a melhor data, horário e clínica disponível e conclua seu
              agendamento em poucos passos. Nosso processo é rápido, intuitivo e
              feito para facilitar o seu dia a dia.
            </Text>
            <ButtonBlue className="ml-auto">Continuar</ButtonBlue>
          </Column>
        </Card>
      </Row>
    </PageFull>
  );
};

export default AppointmentPage;

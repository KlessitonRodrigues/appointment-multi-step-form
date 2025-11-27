"use client";

import { Row } from "src/lib/base/containers/Flex";
import { PageFull } from "src/lib/base/containers/Page";
import { Card } from "src/lib/base/cards/Card";
import { UserData } from "src/lib/components/common/User/UserData";
import { VerticalNav } from "src/lib/base/navigation/FormSteps";
import {
  PiArticle,
  PiCalendarDots,
  PiStethoscope,
  PiWallet,
} from "react-icons/pi";
import AppointmentForm from "src/lib/components/forms/AppointmentForm";

const AppointmentPage = () => {
  return (
    <PageFull>
      <Row resposive="lg" flexY="stretch" className="m-auto">
        <Card className="lg:w-1/3">
          <UserData />
          <VerticalNav
            steps={[
              {
                title: "Agendamento",
                icon: <PiCalendarDots size={26} />,
                disabled: false,
              },
              {
                title: "Médico",
                icon: <PiStethoscope size={26} />,
                disabled: true,
              },
              {
                title: "Forma de Pagamento",
                icon: <PiWallet size={26} />,
                disabled: true,
              },
              {
                title: "Resumo",
                icon: <PiArticle size={26} />,
                disabled: true,
              },
            ]}
          />
        </Card>
        <Card>
          <AppointmentForm
            data={{}}
            step={3}
            nextStep={() => {}}
            prevStep={() => {}}
          />
        </Card>
      </Row>
    </PageFull>
  );
};

export default AppointmentPage;

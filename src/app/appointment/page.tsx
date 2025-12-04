"use client";
import { Row } from "src/lib/base/containers/Flex";
import { PageFull } from "src/lib/base/containers/Page";
import { Card } from "src/lib/base/cards/Card";
import { UserData } from "src/lib/components/common/User/UserData";
import { VerticalNav } from "src/lib/base/navigation/VerticalNav";
import {
  PiArticle,
  PiCalendarDots,
  PiStethoscope,
  PiWallet,
} from "react-icons/pi";
import AppointmentForm from "src/lib/components/forms/AppointmentForm";
import { useFormSteps } from "src/hooks/useFormStep";
import { useEffect, useMemo } from "react";

const getFormSteps = (step: number) => [
  {
    title: "Agendamento",
    icon: <PiCalendarDots size={26} />,
    disabled: step < 0,
  },
  {
    title: "Médico",
    icon: <PiStethoscope size={26} />,
    disabled: step < 1,
  },
  {
    title: "Forma de Pagamento",
    icon: <PiWallet size={26} />,
    disabled: step < 2,
  },
  {
    title: "Resumo",
    icon: <PiArticle size={26} />,
    disabled: step < 3,
  },
];

export default function AppointmentPage() {
  const { step, setStep, nextStep, prevStep } = useFormSteps();
  const formStepsMap = useMemo(() => getFormSteps(step), [step]);

  useEffect(() => {
    setStep(0);
  }, [setStep]);

  return (
    <PageFull>
      <Row flexY="stretch" resposive="lg" className="m-auto min-h-[45rem]">
        <Card className="lg:w-1/3">
          <UserData />
          <VerticalNav steps={formStepsMap} />
        </Card>
        <Card>
          <AppointmentForm
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </Card>
      </Row>
    </PageFull>
  );
}

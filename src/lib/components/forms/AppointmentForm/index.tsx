import If from "src/lib/base/containers/If";
import AppointmentPlaceForm from "./ AppointmentPlace";
import AppointmentDoctorForm from "./AppointmentDoctor";
import AppointmentPaymentForm from "./AppointmentPayment";
import AppointmentResumeForm from "./AppointmentResume";
import useAppointments from "src/hooks/useAppoinments";
import AppointmentConfirmedForm from "./appointmentConfirmed";

type IAppointmentForm = {
  step?: number;
  nextStep?: () => void;
  prevStep?: () => void;
};

const AppointmentForm = (props: IAppointmentForm) => {
  const { nextStep, prevStep, step } = props;
  const { appointment, editAppointment, sendAppointment } = useAppointments();

  return (
    <>
      <If condition={step === 0}>
        <AppointmentPlaceForm
          appointment={appointment}
          onSubmit={(data) => {
            editAppointment(data);
            nextStep && nextStep();
          }}
        />
      </If>
      <If condition={step === 1}>
        <AppointmentDoctorForm
          appointment={appointment}
          onSubmit={(data) => {
            editAppointment(data);
            nextStep && nextStep();
          }}
          onBack={prevStep}
        />
      </If>
      <If condition={step === 2}>
        <AppointmentPaymentForm
          appointment={appointment}
          onSubmit={(data) => {
            editAppointment(data);
            nextStep && nextStep();
          }}
          onBack={prevStep}
        />
      </If>
      <If condition={step === 3}>
        <AppointmentResumeForm
          appointment={appointment}
          onSubmit={() => {
            sendAppointment.mutate(appointment!, {
              onSuccess: () => nextStep && nextStep(),
            });
          }}
          isLoading={sendAppointment.isPending}
          onBack={prevStep}
        />
      </If>
      <If condition={step === 4}>
        <AppointmentConfirmedForm onBack={prevStep} />
      </If>
    </>
  );
};

export default AppointmentForm;

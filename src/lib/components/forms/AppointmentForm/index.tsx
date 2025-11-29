import If from "src/lib/base/containers/If";
import AppointmentPlaceForm from "./ AppointmentPlace";
import AppointmentDoctorForm from "./AppointmentDoctor";
import AppointmentPaymentForm from "./AppointmentPayment";
import AppointmentResumeForm from "./AppointmentResume";
import { IUseFormSteps } from "src/hooks/useFormStep";
import useAppointments from "src/hooks/useAppoinments";
import AppointmentConfirmedForm from "./appointmentConfirmed";

type IAppointmentForm = {
  formSteps: IUseFormSteps;
};

const AppointmentForm = (props: IAppointmentForm) => {
  const { formSteps } = props;
  const { appointment, editAppointment, sendAppointment } = useAppointments();

  return (
    <>
      <If condition={formSteps.step === 0}>
        <AppointmentPlaceForm
          appointment={appointment}
          onSubmit={(data) => {
            editAppointment(data);
            formSteps.nextStep();
          }}
        />
      </If>
      <If condition={formSteps.step === 1}>
        <AppointmentDoctorForm
          appointment={appointment}
          onSubmit={(data) => {
            editAppointment(data);
            formSteps.nextStep();
          }}
          onBack={formSteps.prevStep}
        />
      </If>
      <If condition={formSteps.step === 2}>
        <AppointmentPaymentForm
          appointment={appointment}
          onSubmit={(data) => {
            editAppointment(data);
            formSteps.nextStep();
          }}
          onBack={formSteps.prevStep}
        />
      </If>
      <If condition={formSteps.step === 3}>
        <AppointmentResumeForm
          appointment={appointment}
          onSubmit={() => {
            sendAppointment.mutate(appointment!, {
              onSuccess: () => formSteps.nextStep(),
            });
          }}
          isLoading={sendAppointment.isPending}
          onBack={formSteps.prevStep}
        />
      </If>
      <If condition={formSteps.step === 4}>
        <AppointmentConfirmedForm onBack={formSteps.prevStep} />
      </If>
    </>
  );
};

export default AppointmentForm;

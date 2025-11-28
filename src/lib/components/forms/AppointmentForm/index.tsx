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
          onNext={formSteps.nextStep}
          appointment={appointment}
          onSubmit={editAppointment}
        />
      </If>
      <If condition={formSteps.step === 1}>
        <AppointmentDoctorForm
          onNext={formSteps.nextStep}
          onBack={formSteps.prevStep}
          appointment={appointment}
          onSubmit={editAppointment}
        />
      </If>
      <If condition={formSteps.step === 2}>
        <AppointmentPaymentForm
          onNext={formSteps.nextStep}
          onBack={formSteps.prevStep}
          appointment={appointment}
          onSubmit={editAppointment}
        />
      </If>
      <If condition={formSteps.step === 3}>
        <AppointmentResumeForm
          onNext={formSteps.nextStep}
          onBack={formSteps.prevStep}
          appointment={appointment}
          onSubmit={sendAppointment}
        />
      </If>
      <If condition={formSteps.step === 4}>
        <AppointmentConfirmedForm
          onNext={formSteps.nextStep}
          onBack={formSteps.prevStep}
        />
      </If>
    </>
  );
};

export default AppointmentForm;

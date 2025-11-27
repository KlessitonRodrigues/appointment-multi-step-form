import If from "src/lib/base/containers/If";
import AppointmentPlaceForm from "./ AppointmentPlace";
import AppointmentDoctorForm from "./AppointmentDoctor";
import AppointmentPaymentForm from "./AppointmentPayment";
import AppointmentResumeForm from "./AppointmentResume";

type IAppointmentForm = {
  data: any;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
};

const AppointmentForm = (props: IAppointmentForm) => {
  const { data, step, nextStep, prevStep } = props;

  return (
    <div className="w-full">
      <If condition={step === 0}>
        <AppointmentPlaceForm />
      </If>
      <If condition={step === 1}>
        <AppointmentDoctorForm />
      </If>
      <If condition={step === 2}>
        <AppointmentPaymentForm />
      </If>
      <If condition={step === 3}>
        <AppointmentResumeForm />
      </If>
    </div>
  );
};

export default AppointmentForm;

export const UserModel = {
  id: "",
  name: "",
  email: "",
  password: "",
};
export type IUserModel = Partial<typeof UserModel>;

export const ClinicModel = {
  id: "",
  name: "",
  address: "",
  phone: "",
};
export type IClinicModel = Partial<typeof ClinicModel>;

export const DoctorModel = {
  id: "",
  name: "",
  specialty: "",
  clinicId: "",
  startPrice: 0,
};
export type IDoctorModel = Partial<typeof DoctorModel>;

export const PaymentModel = {
  id: "",
  name: "",
  type: "",
};
export type IPaymentModel = Partial<typeof PaymentModel>;

export const AppointmentModel = {
  date: "",
  time: "",
  clinicId: "",
  doctorId: "",
  paymentMethod: "",
};
export type IAppointmentModel = Partial<typeof AppointmentModel>;

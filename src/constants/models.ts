export const UserModel = {
  id: 0,
  name: "",
  email: "",
  password: "",
  avatarUrl: "",
};

export type IUserModel = Partial<typeof UserModel>;

export const ClinicModel = {
  id: 0,
  name: "",
  address: "",
  phone: "",
  distance: "",
  avatarUrl: "",
};

export type IClinicModel = Partial<typeof ClinicModel>;

export const DoctorModel = {
  id: 0,
  name: "",
  specialty: "",
  clinicId: 0,
  price: 0,
  avatarUrl: "",
};

export type IDoctorModel = Partial<typeof DoctorModel>;

export const PaymentModel = {
  id: 0,
  name: "",
};

export type IPaymentModel = Partial<typeof PaymentModel>;

export const AppointmentModel = {
  id: 0,
  date: "",
  time: "",
  clinicId: 0,
  clinicName: "",
  doctorId: 0,
  doctorName: "",
  userId: 0,
  userName: "",
  paymentId: 0,
  paymentName: "",
  price: 0,
};

export type IAppointmentModel = Partial<typeof AppointmentModel>;

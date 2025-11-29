import {
  IAppointmentModel,
  IClinicModel,
  IDoctorModel,
} from "src/constants/models";

type IFakeAPI = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  data?: any
) => Promise<any>;

const appointmentsDB: IAppointmentModel[] = [
  {
    id: 1,
    doctorId: 101,
    clinicId: 201,
    userId: 301,
    date: "2024-07-01",
    time: "10:00 AM",
  },
];

const doctorsDB: IDoctorModel[] = [
  {
    id: 1,
    name: "Dr. Marcus Hale",
    specialty: "Cardiologista",
    clinicId: 1,
    price: 120,
    avatarUrl: "/images/png/doctor_1.png",
  },
  {
    id: 2,
    name: "Dr. Elena Schultz",
    specialty: "Pediatra",
    clinicId: 2,
    price: 70,
    avatarUrl: "/images/png/doctor_2.png",
  },
  {
    id: 3,
    name: "Dr. Amina Farouk",
    specialty: "Dermatologista",
    clinicId: 2,
    price: 100,
    avatarUrl: "/images/png/doctor_3.png",
  },
];

const clinicsDB: IClinicModel[] = [
  {
    id: 1,
    name: "Clínica Médica - Sul",
    address: "Rua Lorem Ipsum, 123",
    distance: "2.5 km",
    avatarUrl: "/images/png/clinic_1.png",
  },
  {
    id: 2,
    name: "Clínica Médica - Norte",
    address: "Rua Lorem Ipsum, 123",
    distance: "4 km",
    avatarUrl: "/images/png/clinic_1.png",
  },
];

const fakeAPI: IFakeAPI = async (method, path, data) => {
  const sleep = async () => new Promise((r) => setTimeout(r, 2000));
  await sleep();
  console.log(`FakeAPI called: ${method} ${path}`, data || "");

  const endpoints = {
    appointments: {
      GET: () => appointmentsDB,
      POST: (data: IAppointmentModel) => appointmentsDB.push(data),
      PUT: (data: IAppointmentModel) => {
        const index = appointmentsDB.findIndex((appt) => appt.id === data.id);
        if (index !== -1) appointmentsDB[index] = data;
      },
      DELETE: (data: { id: number }) => {
        const index = appointmentsDB.findIndex((appt) => appt.id === data.id);
        if (index !== -1) appointmentsDB.splice(index, 1);
      },
    },
    doctors: {
      GET: () => doctorsDB,
      POST: (data: IDoctorModel) => doctorsDB.push(data),
      PUT: (data: IDoctorModel) => {
        const index = doctorsDB.findIndex((doc) => doc.id === data.id);
        if (index !== -1) doctorsDB[index] = data;
      },
      DELETE: (data: { id: number }) => {
        const index = doctorsDB.findIndex((doc) => doc.id === data.id);
        if (index !== -1) doctorsDB.splice(index, 1);
      },
    },
    clinics: {
      GET: () => clinicsDB,
      POST: (data: IClinicModel) => clinicsDB.push(data),
      PUT: (data: IClinicModel) => {
        const index = clinicsDB.findIndex((clinic) => clinic.id === data.id);
        if (index !== -1) clinicsDB[index] = data;
      },
      DELETE: (data: { id: number }) => {
        const index = clinicsDB.findIndex((clinic) => clinic.id === data.id);
        if (index !== -1) clinicsDB.splice(index, 1);
      },
    },
  };

  // @ts-ignore
  if (endpoints[path] && endpoints[path][method]) {
    // @ts-ignore
    return endpoints[path][method](data);
  } else {
    throw new Error("Endpoint not found");
  }
};

export default fakeAPI;

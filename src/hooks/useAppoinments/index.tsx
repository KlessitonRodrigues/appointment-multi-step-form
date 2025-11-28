import { useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { IAppointmentModel } from "src/constants/models";
import fakeAPI from "src/services/FakeAPI";

const queryClient = new QueryClient();

const useAppointments = () => {
  const [appointment, setAppointment] = useState<IAppointmentModel>();

  const getAppointments = useQuery<IAppointmentModel>(
    {
      queryKey: ["appointments"],
      queryFn: async () => await fakeAPI("GET", "appointments"),
      enabled: false,
    },
    queryClient
  );

  const editAppointment = (data: IAppointmentModel) => {
    setAppointment((prev) => ({ ...prev, ...data }));
  };

  const sendAppointment = async () => {
    if (!appointment) return;
    await fakeAPI("POST", "appointments", appointment);
  };

  return {
    appointment,
    getAppointments,
    editAppointment,
    sendAppointment,
  };
};

export default useAppointments;

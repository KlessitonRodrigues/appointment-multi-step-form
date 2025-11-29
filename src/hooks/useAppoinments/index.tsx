import { useCallback, useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
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

  const sendAppointment = useMutation(
    {
      mutationKey: ["send-appointment"],
      mutationFn: async (data: IAppointmentModel) =>
        await fakeAPI("POST", "appointment/confirm", data),
    },
    queryClient
  );

  const editAppointment = useCallback((data: IAppointmentModel) => {
    setAppointment((prev) => ({ ...prev, ...data }));
  }, []);

  return {
    appointment,
    getAppointments,
    editAppointment,
    sendAppointment,
  };
};

export default useAppointments;

/*
  const sendAppointment = useCallback(async () => {
    if (!appointment) return;
    await fakeAPI("POST", "appointment/confirm", appointment);
  }, [appointment]);

*/

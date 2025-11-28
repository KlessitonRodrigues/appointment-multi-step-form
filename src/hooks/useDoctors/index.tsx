import { QueryClient, useQuery } from "@tanstack/react-query";
import { IDoctorModel } from "src/constants/models";
import fakeAPI from "src/services/FakeAPI";

const queryClient = new QueryClient();

const useDoctors = () => {
  const getDoctors = useQuery<IDoctorModel[]>(
    {
      queryKey: ["doctors"],
      queryFn: async () => await fakeAPI("GET", "doctors"),
    },
    queryClient
  );

  return {
    getDoctors,
  };
};

export default useDoctors;

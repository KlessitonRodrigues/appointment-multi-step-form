import { QueryClient, useQuery } from "@tanstack/react-query";
import { IClinicModel } from "src/constants/models";
import fakeAPI from "src/services/FakeAPI";

const queryClient = new QueryClient();

const useClinics = () => {
  const getClinics = useQuery<IClinicModel[]>(
    {
      queryKey: ["clinics"],
      queryFn: async () => await fakeAPI("GET", "address/clinics"),
    },
    queryClient
  );

  return {
    getClinics,
  };
};

export default useClinics;

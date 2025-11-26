"use client";

import { PiFloppyDiskBack } from "react-icons/pi";
import { useMutation } from "react-query";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { Card } from "src/lib/base/cards/Card";
import { Title } from "src/lib/base/text/Text";
import { axiosClient } from "src/services/axiosClient";

const Header = () => {
  const submitQuery = useMutation({
    mutationFn: async (data: any) => {
      return axiosClient.post("auth/sign-in", data);
    },
  });

  const onSubmit = async () => {
    const data = {
      email: "test@email.com",
      password: "test123",
      remenberMe: true,
    };

    await submitQuery.mutateAsync(data);
  };

  return (
    <Card>
      <Title>Test App</Title>
      <ButtonBlue onClick={onSubmit}>
        <PiFloppyDiskBack size={18} />
        Send
      </ButtonBlue>
    </Card>
  );
};

export default Header;

/*
const {} = useQuery({
    queryKey: "test",
    queryFn: () => new Promise((res, rej) => setTimeout(rej, 3000)),
  });
*/

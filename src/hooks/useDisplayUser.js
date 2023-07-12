import { useMemo } from "react";
import { useAuth } from "src/context/AuthContextProvider";

const useDisplayUser = () => {
  const [user] = useAuth();

  const { email, lastName, firstName } = useMemo(() => {
    const email = user?.email;
    const firstName = user?.user_metadata?.firstName;
    const lastName = user?.user_metadata?.lastName;
    return { email, firstName, lastName };
  }, [user?.email, user?.user_metadata?.firstName, user?.user_metadata?.lastName]);

  return firstName || lastName ? `${firstName} - ${lastName}` : email;
};

export default useDisplayUser;

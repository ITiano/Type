"use client";

import CustomList, { ListElement } from "@components/utils/CustomList";
import Spinner from "@components/utils/Spinner";
import useDisplayUser from "@hooks/useDisplayUser";
import React from "react";
import { useAuth } from "src/context/AuthContextProvider";

const AdminContainer = () => {
  const [user] = useAuth();
  const userName = useDisplayUser();

  return (
    <div className="max-w-layout my-8 bg-gray-600 p-5 rounded-lg">
      {!user ? (
        <div className="centering">
          <Spinner />
        </div>
      ) : (
        <>
          <h3 className="text-xl">Welcome {userName}</h3>
          <div>
            <CustomList>
              <ListElement />
              <ListElement />
            </CustomList>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminContainer;

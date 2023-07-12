"use client";

import { EditIcon } from "@assets/icons/icons";
import CustomBtn from "@components/utils/CustomBtn";
import CustomList, { IconElement, ListElement } from "@components/utils/CustomList";
import Spinner from "@components/utils/Spinner";
import useDisplayUser from "@hooks/useDisplayUser";
import React, { useState } from "react";
import { useAuth } from "src/context/AuthContextProvider";
import AddOrEditCourseModal from "./AddOrEditCourseModal";
import { getCoursesCount } from "@services/adminApi";

const initialValue = { seo_title: "", seo_description: "", name: "", kind: "", course: "" };

const AdminContainer = ({ data }) => {
  const [user] = useAuth();
  const userName = useDisplayUser();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const addOrEditCourseHandler = async (item) => {
    if (item?.id) setOpen({ ...initialValue, ...item });
    else {
      setLoading(true);
      const { count, error } = await getCoursesCount();
      if (count && !error) setOpen({ ...initialValue, name: `Lesson ${count + 1}` });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-layout my-8 bg-gray-600 p-5 rounded-lg">
      {!user ? (
        <div className="centering">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex-between-center">
            <h3 className="text-xl">Welcome {userName}</h3>
            <CustomBtn text="Add course" className="black-btn" onClick={addOrEditCourseHandler} loading={loading} />
          </div>
          <div className="mt-5">
            <CustomList data={data}>
              <ListElement title="Name" value={(item) => item.name} responsive="" />
              <ListElement title="Kind" value={(item) => item.kind} responsive="" />
              <ListElement title="Course" value={(item) => item.course} accordion={true} />
              <ListElement title="Seo title" value={(item) => item.seo_title} responsive="md" />
              <ListElement title="Seo description" value={(item) => item.seo_description} responsive="lg" />
              <IconElement icon={<EditIcon />} onClick={addOrEditCourseHandler} />
            </CustomList>
          </div>
          <AddOrEditCourseModal open={open} setOpen={setOpen} initialValue={initialValue} />
        </>
      )}
    </div>
  );
};

export default AdminContainer;

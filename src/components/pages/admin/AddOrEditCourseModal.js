import CustomBtn from "@components/utils/CustomBtn";
import CustomDropDown from "@components/utils/CustomDropDown";
import CustomInput from "@components/utils/CustomInput";
import CustomTextArea from "@components/utils/CustomTextArea";
import ModalContainer from "@components/utils/ModalContainer";
import { courseKinds } from "@helper/utils";
import { addCourse, updateCourse } from "@services/adminApi";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AddOrEditCourseModal = ({ open, setOpen, initialValue }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    open && setValue(open);
  }, [open]);

  const submitHandler = useCallback(
    async (e) => {
      setLoading(true);
      e.preventDefault();
      if (open.id) {
        const data = { ...open, ...value, kind: value?.kind?.value || value?.kind };
        const { error } = await updateCourse(data);
        !error && toast.success("Success");
      } else {
        const data = { ...value, kind: value.kind.value };
        const { error } = await addCourse(data);
        !error && toast.success("Success");
      }
      setOpen(false);
      setLoading(false);
      setValue(initialValue);
    },
    [initialValue, open, setOpen, value]
  );

  const disableCheck = !value.seo_title || !value.seo_description || !value.name || !value.kind || !value.course;

  return (
    <ModalContainer open={open} setOpen={setOpen} clear title={open?.id ? "Edit course" : "Add course"}>
      <form onSubmit={submitHandler} className="flex flex-col gap-4 [&>*]:w-full">
        <CustomInput value={value} setValue={setValue} name="name" label="Name" disabled />
        <CustomDropDown value={value} setValue={setValue} name="kind" list={courseKinds} label="Kind" />
        <CustomInput value={value} setValue={setValue} name="seo_title" label="Seo title" />
        <CustomInput value={value} setValue={setValue} name="seo_description" label="Seo description" />
        <CustomTextArea value={value} setValue={setValue} name="course" label="Course" />
        <CustomBtn type="submit" className="black-btn" text="Submit" disabled={disableCheck} loading={loading} />
      </form>
    </ModalContainer>
  );
};

export default AddOrEditCourseModal;

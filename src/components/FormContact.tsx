"use client";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { Input } from "./form/Index";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const FormContact = () => {
  const [submiting, setsubmiting] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
    service: "",
  };

  const handleSubmit = async (values) => {
    try {
      setsubmiting(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success("🎉 Email sent successfully!");
    } catch (error) {
      toast.error("😢 Error sending email: " + error.message);
    } finally {
      setsubmiting(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="firstname"
          name="firstname"
          placeholder="Firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstname && formik.errors.firstname}
        />
        <Input
          type="lastname"
          name="lastname"
          placeholder="Lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && formik.errors.lastname}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          type="number"
          name="phone"
          placeholder="Phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone}
        />
      </div>
      <Select
        value={formik.values.service}
        onValueChange={(value) => formik.setFieldValue("service", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder="Select a service"
            // className=" text-white "
          ></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="mobile">Mobile Development</SelectItem>
            <SelectItem value="ui/ux">Ui/ux Design</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea
        value={formik.values.message}
        onChange={(e) => {
          formik.setFieldValue("message", e.target.value);
        }}
        className="h-[200px]"
        placeholder="Type your message here."
      />
      <Button
        type="submit"
        className="bg-accent text-black h-[38px] max-w-40 hover:bg-accent/90 flex items-center justify-center"
        disabled={submiting}
      >
        {submiting ? (
          <>
            <span className="loader mr-2"></span> Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
};

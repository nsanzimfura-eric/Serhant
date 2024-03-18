import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from "@/utils/InputField";


const ContactUs = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

  const onSubmit = (data) => console.log("data", data);

    return (
        <>
            <div className="flex justify-start w-full">
                <h4 className="text-2xl mb-11">Sell with us!</h4>
            </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-full"
          >
            <InputField
              label="Name"
              name="name"
              register={register}
              errors={errors}
            />
            <InputField
              label="Phone"
              name="phone"
              register={register}
              errors={errors}
            />
            <InputField
              label="Email Address"
              name="email"
              register={register}
              errors={errors}
            />
            <InputField
              label="Home Address"
              name="address"
              register={register}
              errors={errors}
            />
            <InputField
              label="Topic"
              name="topic"
              type="select"
              register={register}
              errors={errors}
              options={[
                { value: "generalQuestion", label: "General Question" },
                {
                  value: "customerSupport",
                  label: "Customer Support / Feedback",
                },
                { value: "selling", label: "Selling / Leasing My Property" },
                { value: "press", label: "Press" },
                {
                  value: "consideringSellOptions",
                  label: `I'm Considering My Sell Options`,
                },
              ]}
            />
            <InputField
              label="Message"
              name="message"
              type="textarea"
              rows={4}
              cols={12}
              register={register}
              errors={errors}
            />

            <button
              type="submit"
              className="underline-animation before:bg-[#151176] text-sm font-bold py-1 hover:text-gray-400 flex w-14"
            >
              Submit
            </button>
          </form>
        </>
    );
};

export default ContactUs;
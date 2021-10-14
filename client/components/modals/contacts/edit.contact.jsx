import { Fragment } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useForm, useController } from "react-hook-form";
import Select from "react-select";

import { refreshData } from "../../../lib";

export function EditContact({ setOpen, jobs, contact }) {
  const { register, handleSubmit, errors, control, reset } = useForm({
    defaultValues: {
      name: contact.name ? contact.name : null,
      title: contact.title ? contact.title : null,
      phone: contact.phone ? contact.phone : null,
      location: contact.location ? contact.location : null,
      email: contact.email ? contact.email : null,
      github: contact.github ? contact.github : null,
      twitter: contact.twitter ? contact.twitter : null,
      linkedin: contact.linkedin ? contact.linkedin : null,
      done: contact.done ? true : false,
      job: {
        value: contact.company ? contact.company : null,
        label: contact.company ? contact.company : null
      }
    }
  });

  const [session, loading] = useSession();
  const router = useRouter();

  const url = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/contact/${contact.contactId}`;

  const jobsData = jobs.map((item, i) => {
    return {
      value: item.company,
      label: item.company,
      jobId: item.jobId,
      company: item.company
    };
  });

  const {
    user: { userId }
  } = session;

  const {
    field: { jobRef, ...jobInputProps }
  } = useController({
    name: "job",
    control
  });

  const editContact = async (data) => {
    try {
      const {
        location,
        title,
        phone,
        name,
        email,
        job: { value },
        github,
        linkedin,
        twitter
      } = data;

      let editContact = {
        userId: userId,
        contactId: contact.contactId,
        name: name,
        title: title,
        location: location,
        phone: phone,
        email: email,
        twitter: twitter,
        linkedin: linkedin,
        github: github,
        company: value
      };

      let response = await axios.put(url, editContact);

      setOpen(false);
      router.push("/dashboard/contacts");
      // refreshData(router)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div className="inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:p-6">
        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="bg-white sm:rounded-lg">
          <div className="mt-6 px-3 py-3">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit Contact
            </h3>
          </div>
          <div className="px-4 py-3">
            <div className="grid grid-cols-1 gap-6 py-2 my-3 sm:grid-cols-4 relative">
              {/* Row 1 */}
              <div className="col-span-1 sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Contact Name"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="col-span-1 sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    {...register("title")}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Job Title"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1 relative">
                  <Select
                    {...jobInputProps}
                    inputRef={jobRef}
                    options={jobsData}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    isSearchable={false}
                    name="job"
                    placeholder="Select Job"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="col-span-1 sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    {...register("phone")}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="location"
                    {...register("location")}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-4">
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Twitter
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="linkedin"
                    {...register("linkedin")}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Twitter handle"
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-4">
                <label
                  htmlFor="twitter"
                  className="block text-sm font-medium text-gray-700"
                >
                  Linkedin
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="twitter"
                    {...register("twitter")}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Linkedin handle"
                  />
                </div>
              </div>
              {/* Row 4 */}
              <div className="col-span-1 sm:col-span-4">
                <label
                  htmlFor="github"
                  className="block text-sm font-medium text-gray-700"
                >
                  Github
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="github"
                    {...register("github")}
                    className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Github handle"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 mt-10 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none  sm:text-sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-500 text-base font-medium text-white hover:bg-teal-700 focus:outline-none  sm:text-sm"
              onClick={handleSubmit(editContact)}
            >
              Edit Contact
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  );
}

export const doctorFormData = {
  Doctor_name: "",
  Doctor_degree: "",
  Doctor_experience: "",
  Doctor_speciality: "",
  Profile_image: null,
  Contact_no: "",
  Alternate_contact: "",
  Whatsapp_no: "",
  Email_id: "",
  Address: "",
  Country: "",
  Region: "",
  Password: "",
  status: "",
  Approval_status: "",
  Created_by: "",
  Updated_by: "",
  Approved_by: "",
  approved_date: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const DoctorFields = [
  {
    label: "Doctor Name",
    type: "text",
    id: "doctor-name",
    name: "doctor-name",
    placeHolder: "Enter Doctor Name",
    className: "py-2 px-3 rounded-full bg-gray-50 text-primary",
  },

  {
    label: "Email Id",
    type: "email",
    id: "Email_id",
    name: "Email_id",
    placeHolder: "Your working Email",
    className: "py-2 px-3 rounded-full bg-gray-50 text-primary",
  },
  {
    label: "Password",
    type: "text",
    id: "Password",
    name: "Password",
    placeHolder: " Create your Password",
    className: "py-2 px-3 rounded-full bg-gray-50 text-primary",
  },
  {
    label: "Address",
    type: "text",
    id: "Address",
    name: "Address",
    placeHolder: "Address",
    className: "py-2 px-3 rounded-full bg-gray-50 text-primary",
  },
];

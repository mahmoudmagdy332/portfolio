import { useFormik } from "formik";
import * as Yup from "yup";
const Form = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          message: "",
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .min(3, "Name must be at least 3 characters long")
            .required("Name required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email required"),
          message: Yup.string()
            .min(10, "Message must be at least 10 characters long.")
            .required("Message is required"),
        }),
        onSubmit: (values, { resetForm }) => {
          console.log("بيانات النموذج:", values);
          resetForm(); // إعادة تعيين الحقول بعد الإرسال
        },
      });
  return (
    <div className="border border-primary p-5">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
    
        <div className="mb-4">
          <label className="text-primary font-semibold">Name</label>
          <input
            type="text"
            placeholder="Name"
             style={{ backgroundColor: "transparent", outline: "none" }}
                className="w-full border-b border-[#8596A8]  focus:border-primary pb-2 text-primary"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

    
        <div className="mb-4">
          <label className="text-primary font-semibold">Email</label>
          <input
            type="email"
            placeholder="Ex. name@email.com"
             style={{ backgroundColor: "transparent", outline: "none" }}
                className="w-full border-b border-[#8596A8] focus:border-primary pb-2 text-primary"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

     
        <div className="mb-4">
          <label className="text-primary font-semibold">Message</label>
          <textarea
            rows={4}
            className="w-full p-2 border border-[#8596A8] focus:border-primary rounded"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm">{formik.errors.message}</p>
          )}
        </div>

        {/* زر الإرسال */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 cursor-pointer text-lg  rounded-xs hover:bg-foreground transition ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Form
import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const AdvancedForm = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            id="username"
            labelText="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            id="jobs"
            labelText="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="" checked disabled>
              Please select a job type
            </option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox id="tos" type="checkbox" name="acceptedTos" />
          {/* <Field type="text" name="name" placeholder="Name" /> */}
          {/* <input
            type="text"
            placeholder="Enter your name"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}

          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;

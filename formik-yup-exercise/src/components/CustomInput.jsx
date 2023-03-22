import { useField } from "formik";

const CustomInput = ({ labelText, id, ...props }) => {
  // console.log(props); // {name: 'username', type: 'text', placeholder: 'Enter your username'}
  const [field, meta] = useField(props);
  // + Custom input tanimlancagi zaman, Formik icindeki built-in methodlara ve formik state'lerine erismek icin useField(componentProps) hooku kullanilir. Formik icindeki Custom Input'larda local state'lere yine ihtiyac duyulmaz cunku name prop'u Formik state'i olarak algilanir.
  // + useField ile erisilen meta ile Formik name state'ine ait value, error ve touched verilerine, field ile de name state'ine, onBlur, onChange Formik built-in handler'larina erisilebilir.
  // + field handler'lari name ile tanimlanan Formik state'ini yonetir, field'taki onBlur handler'i sayesinde toggle'lanan meta'daki touched ile ve ayri olarak error ile de error handling saglanir.

  // console.log("field:", field); // field: {name: 'username', value: '', onChange: ƒ, onBlur: ƒ}
  // console.log("meta:", meta); // meta: {value: '', error: undefined, touched: false, initialValue: '', initialTouched: false, …}
  console.log(field.value);

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        {...props}
        {...field}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomInput;

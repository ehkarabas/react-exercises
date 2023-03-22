import { useFormik } from "formik";
import { useState } from "react";
import { basicSchema } from "../schemas";

const BasicForm = () => {
  // ? Formik olmadan formdaki input verilerini tutmak icin bir state'e ve bunu degistiren handler'a ihtiyac vardir.
  // const [email, setEmail] = useState("");
  // ? useFormik() hook'u ile Formik state'i ve tum helper'leri otomatik olarak dondurulerek formda deger yakalama isi formik tarafindan yonetilmis olur.
  // URL -> https://org/docs/api/useFormik
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  const onSubmit = async (values, actions) => {
    // console.log(actions); // {resetForm: ƒ, validateForm: ƒ, validateField: ƒ, setErrors: ƒ, setFieldError: ƒ, …}
    // + await anahtar kelimesi yalnızca Promise nesneleriyle çalışır ve işlemin tamamlanmasını beklemek için kullanılır. İşlemin tamamlanmasını beklemek istediğiniz zaman, await ile kullanılacak bir Promise oluşturmanız gerekir. await setTimeout(...): setTimeout fonksiyonu doğrudan bir Promise döndürmediği için, bu ifade beklenen şekilde çalışmaz ve hemen devam eder. Hem fetch hem de axios HTTP isteklerini gerçekleştirmek için kullanılan popüler JavaScript kütüphaneleridir ve her ikisi de Promise döndürür. Bu sayede, bu kütüphaneleri kullanarak yapılan istekler await anahtar kelimesi ile bekletilebilir.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values); // {email: 'as@as', age: 12, password: 'aA111', confirmPassword: 'aA111'}
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(formik); // {values: {…}, errors: {…}, touched: {…}, status: undefined, isSubmitting: false, …}
  // values: {email: '', age: '', password: '', confirmPassword: ''}

  console.log(errors); // ? useFormik argumanina girilen object'te validationSchema key'ine verilen schemas klasorunde olusturulmus olan yup.object().shape()'e gore her field icin tanimlanan kontroller ve hata mesajlari anlik olarak takip edilir ve olusturulur.
  // {email: 'Please enter a valid email', age: 'Required', password: 'Required', confirmPassword: 'Required'}
  // {age: 'age must be a positive number', password: 'Required', confirmPassword: 'Required'}
  // {password: 'password must be at least 5 characters', confirmPassword: 'Required'}
  // {password: 'Must contain at least 1 lowercase, 1 uppercase, 1 digit, and 5 characters in total.', confirmPassword: 'Required'}
  // {confirmPassword: 'Required'}
  // {confirmPassword: 'Passwords must match.'}

  console.log(touched); // ? touched kullanmak focus'u yani input alanina girilip cikilmanin kontrolunun yapilmasini saglar, touched kullanilmazsa errors ile hata algilandigi anda yapilacak olan islemler yapilmaya baslayacaktir.
  // {} \n {email: true}

  console.log(values);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        // value={email} // standart yontem -> deger yakalamak icin state kullanimi
        value={values.email} // + formik ile deger yakalama -> formik state'inin values object'inden ilgili state'i cagirma
        placeholder="Enter your email"
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }} // standart yontem -> deger yakalamak icin handler kullanimi
        onChange={handleChange} // + formik ile deger yakalama -> formik handleChange built-in handler'ini cagirma
        onBlur={handleBlur} // + formik ile validation -> input'a tiklandiginda yapilan girisleri dogrulayan handleBlur built-in handler'ini cagirma
        className={errors.email && touched.email ? "input-error" : ""}
      />

      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        value={values.age}
        placeholder="Enter your age"
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />

      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={values.password}
        placeholder="Enter your password"
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />

      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        value={values.confirmPassword}
        placeholder="Confirm password"
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />

      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};
export default BasicForm;

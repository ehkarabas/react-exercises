import { Avatar, Container, Stack, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/styles";
import RegisterForm from "../components/auth/RegisterForm";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import { object, string, number, date, InferType, ref } from "yup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
  const theme = useTheme();
  const { register } = useAuthCall();

  const isValidUrl = (url) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };

  // + A good working URL validation regex
  // /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

  const registerSchema = object({
    username: string()
      .min(5, "Username must be at least 5 characters.")
      .max(20, "Username must be at most 20 characters.")
      .required("You must enter your username."),
    first_name: string()
      .min(2, "First name must be at least 2 characters.")
      .max(20, "First name must be at most 20 characters.")
      .required("You must enter your first name."),
    last_name: string()
      .min(2, "Last name must be at least 2 characters.")
      .max(20, "Last name must be at most 20 characters.")
      .required("You must enter your last name."),
    email: string()
      .email("Email is not valid.")
      .required("You must enter your email."),
    image: string().test("is-url-valid", "URL is not valid", (value) =>
      isValidUrl(value)
    ),
    bio: string()
      .min(10, "Bio must be at least 10 characters.")
      .max(100, "Bio must be at most 100 characters."),
    password: string()
      .min(8, "Password must be at least 8 characters.")
      .max(20, "Password must be at most 20 characters.")
      .matches(/\d+/, "Must contain at least 1 digit.")
      .matches(/[a-z]+/, "Must contain at least 1 lowercase.")
      .matches(/[A-Z]+/, "Must contain at least 1 uppercase.")
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
        "Must contain at least 1 special character."
      ) //  regex ile kural belirleme, matches hiyerarsik olarak ayri regex'ler ile chain'lenebilir
      .required("You must enter your password."),
    password2: string()
      .oneOf([ref("password"), null], "Passwords must match.")
      .required("You must confirm your password."), // her iki password alaninin eslesme kontrolu ve eslesmiyorsa hata mesaji gosterme
  });

  return (
    <>
      <Helmet>
        <title>BlogApp - Register</title>
      </Helmet>

      <Container maxWidth="sm">
        <Stack justifyContent="center" spacing={2} p={2}>
          <Avatar
            sx={{
              backgroundColor: "warning.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            color={theme.palette.warning.light}
          >
            Register
          </Typography>
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              image: "",
              bio: "",
              password: "",
              password2: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              // console.log(values.email); // form state'i
              // console.log(values.password); // form state'i
              // console.log(actions); // form islemleri
              // console.log(actions.resetForm); // form resetleme
              // console.log(actions.setSubmitting); // formik isSubmitting built-in state'i toggle'i
              // TODO register(values) POST request -> handled in register dispatcher
              // TODO navigate -> handled in register dispatcher
              register(values);
              // actions.resetForm(); // form resetleme
              // actions.setSubmitting(false); // formik isSubmitting built-in state'ini false yapma
            }}
            component={(props) => <RegisterForm {...props} />}
          />
          <Typography>
            Already have an account?{" "}
            <Link to="/login" className="text-red-600">
              Sign in
            </Link>
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Register;

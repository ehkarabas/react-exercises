import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Formik } from "formik";
import { object, string, number, date, InferType, ref } from "yup";
import { useSelector } from "react-redux";
import useBlogCall from "../../hooks/useBlogCall";
import { LoadingButton } from "@mui/lab";
import CommentIcon from "@mui/icons-material/Comment";
import CommentCard from "./CommentCard";

const CommentForm = ({ id, comments, onDataChange }) => {
  const theme = useTheme();
  const { commentCreate } = useBlogCall();
  const { loading } = useSelector((state) => state.auth);
  // console.log(id);
  // console.log(comments);

  const commentSchema = object({
    comment: string().required("Comment cannot be empty."),
  });

  return (
    <Box sx={{ minWidth: "270px", width: "100%", maxWidth: "768px", p: 0 }}>
      <Stack
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        p={2}
        sx={{ width: "100% !important" }}
      >
        <Avatar
          sx={{
            backgroundColor: "primary.light",
            m: "auto",
          }}
        >
          <CommentIcon size="30" />
        </Avatar>
        <Typography
          variant="h4"
          align="center"
          color={theme.palette.primary.light}
        >
          Comments
        </Typography>

        {comments.map((comment, index) => (
          <CommentCard key={`comment-card-${index}`} comment={comment} />
        ))}

        <Formik
          initialValues={{
            comment: "",
          }}
          validationSchema={commentSchema}
          onSubmit={(values, actions) => {
            // console.log(values.email); // form state'i
            // console.log(values.password); // form state'i
            // console.log(actions); // form islemleri
            // console.log(actions.resetForm); // form resetleme
            // console.log(actions.setSubmitting); // formik isSubmitting built-in state'i toggle'i
            commentCreate(id, { post: id, content: values.comment });
            onDataChange();
            actions.resetForm(); // form resetleme
            actions.setSubmitting(false); // formik isSubmitting built-in state'ini false yapma
          }}
        >
          {({
            values, // Formik built-in state container'i
            errors, // Formik built-in error handling state'i
            touched, // Formik built-in focus tracking state'i
            handleChange, // Formik built-in onChange handler'i
            handleBlur, // Formik built-in onBlur handler'i -> focus disi olundugunda tetiklenir, touched'in true olarak toggle'lanmasini saglar, validasyon saglar, validasyon icin gereklidir
            handleSubmit, // Formik built-in onSubmit handler'i
            isSubmitting, // Formik built-in submit phase tracking state'i
          }) => (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                label="Comment"
                name="comment"
                id="comment"
                variant="outlined"
                multiline
                rows={2}
                value={values.comment}
                error={touched?.comment && Boolean(errors?.comment)}
                helperText={touched?.comment && errors?.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              <LoadingButton
                variant="contained"
                type="submit"
                loading={loading}
              >
                Submit Comment
              </LoadingButton>
            </Box>
          )}
        </Formik>
      </Stack>
    </Box>
  );
};

export default CommentForm;

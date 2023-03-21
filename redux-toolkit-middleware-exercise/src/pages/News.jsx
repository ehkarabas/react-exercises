import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { clearNews, getNews } from "../features/newsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";

const News = () => {
  const dispatch = useDispatch();
  const { news, error, loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());

    // ? cleanup function (componentDidUnmount)
    // - News component'i kaldırıldığında calisir ve store state'ini temizler. Nedeni ise bir React uygulamasında state'in temiz ve düzenli tutulmasını sağlamaktır. Verilerin doğrudan API'den alınıp render edilmesine ve yerel depolama gibi kalici saklamanin söz konusu olmamasina ragmen(yani componentDidMount gereksiz gibi gorunmesine ragmen) bu örnekte bile, temiz bir state yönetimi sağlamak, daima uygulamanın performansını ve hatasız çalışmasını destekler. Uygulama zamanla daha karmaşık hale gelebilir. Uygulamanın ölçeklenebilirliğini ve gelecekteki özelliklerin kolay entegrasyonunu sağlamak için, state yönetiminin düzenli ve temiz tutulması önemlidir.
    return () => {
      dispatch(clearNews());
    };
  }, []);

  return (
    <>
      <h1>NEWS</h1>
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadingGif} alt="loading visual" />
        </Box>
      )}

      {error && (
        <Typography variant="h2" color="error">
          {error}
        </Typography>
      )}

      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {news?.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              src={
                item?.urlToImage ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              }
              alt="image not found"
              onError={(e) => {
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" href={item?.url} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;

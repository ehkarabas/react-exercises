import axios from "axios";
import { useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ProductForm from "../components/ProductForm";

const initialState = {
  name: "",
  image: "",
  price: 1,
  dampingRate: 0.8,
  amount: 1,
};

const UpdateProduct = () => {
  const { state: item } = useLocation();

  // console.log(item); // null
  // console.log(useLocation()); // {pathname: '/product-list/Macbook-M1-Air-16GB', search: '', hash: '', state: null, key: 'default'}

  const { update: linkInputted } = useParams();
  // console.log(linkInputted); // Macbook-M1-Air-16GB

  const [formData, setFormData] = useState(item);
  const [dataFetched, setDataFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;
  // console.log(item);

  const handleChange = (e) => {
    if (e.target.id === "price") {
      if (e.target.value >= 100000) {
        alert("Allowed maximum price is 100.000, try with lower prices.");
        setFormData({ ...formData, price: 1 });
        e.target.value = "";
      }
    }
    if (e.target.id === "amount") {
      if (e.target.value >= 25) {
        alert("Allowed maximum quantity is 25, try with lower amount.");
        setFormData({ ...formData, amount: 1 });
        e.target.value = "";
      }
    }
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log({ [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}/${item ? item.id : formData.id}`, formData);
      setFormData(initialState);
      navigate("/product-list");
    } catch (error) {
      console.log(error);
    }
  };

  const itemsFetcher = async () => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const { data } = await axios(url);
      setDataFetched(data);
      setIsLoading(false);
    } catch (error) {
      console.log(
        error.response.status,
        error.response.statusText,
        error.message
      );
    }
  };

  useEffect(() => {
    itemsFetcher();
    // console.log(dataFetched);
  }, []);

  if (!formData) {
    if (isLoading) {
      itemsFetcher();
      // console.log(dataFetched);
      return null; // veya bir yüklenme animasyonu gösterilebilir
    }

    const itemFound = dataFetched.find((fetchedItem) => {
      // console.log(dataFetched);
      // console.log(fetchedItem.name.trim().replaceAll(" ", "-").toLowerCase());
      // console.log(linkInputted.toLowerCase());
      return (
        fetchedItem.name.trim().replaceAll(" ", "-").toLowerCase() ===
        linkInputted.toLowerCase()
      );
    });

    if (itemFound) {
      setFormData(itemFound);
    } else {
      return <Navigate to="/product-not-found" />;
    }
  }

  return (
    <div className="container">
      <ProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        text="Update"
      />
    </div>
  );
};

export default UpdateProduct;

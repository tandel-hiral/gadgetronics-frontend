import { useNavigate } from "react-router-dom";
import "./Category.scss";

//this category is shop by category if 4 categories

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category"> 
    <div className="sec-heading">Categories</div>
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}> 
          {/* category in navigate is the one we define in path of route */}
            <img
              src={
                item.attributes.img.data.attributes.url
                // process.env.REACT_APP_BASE_URL +
                // item.attributes.img.data.attributes.url
              }
            />
      {/* <div className="category-name">Headphones</div> */}

          </div>
          
        ))} 
      </div>

    </div>
  );
};

export default Category;

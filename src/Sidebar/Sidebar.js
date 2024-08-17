import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>ShopNest 🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        {/* <Price handleChange={handleChange} /> */}
        <h2>no no </h2>
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;

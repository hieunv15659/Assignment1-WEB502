import footer from "../../components/Footer";
import UserHeader from "../../components/Header/User";

const detailProduct = {
  render: async () => {
    return /*html*/ `        
           ${UserHeader.render()}
     
           ${footer.render()}
        `;
  },
};

export default detailProduct;

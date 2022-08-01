import { Read, Update, Update2 } from "../../../api/product";
import Product from "../../../model/product";
import { cate } from "../../../api/category";
import AdminHeader from "../../../components/Header/Admin";
import SidebarAdmin from "../../../components/Sidebar";
import { UploadFile } from "../../../api/image";
const EditProductPage = {
  render: async (id: Number) => {
    const listcate: Category = await cate();
    const getProd = await Read(id);
    const itemProd: Product = getProd.data;
    const idbyProd = itemProd.category;

    return /*html*/ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${SidebarAdmin.render()}
            </div>
            <div class="grow px-4">
                <div>
                <h3>Cập nhật sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                    <div  >
                        <div class="flex flex-col justify-center items-center border rounded-md h-[300px] w-[400px]">   
                        <div>
                                <img src="${
                                  itemProd.image
                                }" class="h-[300px] mb-2 pt-6" id="preview-image" />
                            </div>
                            <div class="px-12" >
                                <input type="file" accept=".jpg, .jpeg .png, .svg, .webp"  id="img-post" name="img-post">
                            </div>
                            <div class="text-red-500" id="erImg"></div>
                        </div>
                        <div class="py-24 flex flex-col">
                        <label   for="">Mô tả ngắn</label>
                        <textarea id="shortDesc" class="w-full p-2 w-full border rounded-md px-2 h-20">${
                          itemProd.shortDescription
                        }</textarea>
                        <div class="text-red-500" id="erShort"></div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div>Thông tin sản phẩm</div>
                        <div class="flex flex-col mt-4">
                        <label for="">Tên sản phẩm:</label>
                        <input id="name" type="text" placeholder="Tên sản phẩm" value="${
                          itemProd.name
                        }" class="w-full border rounded-md px-2 h-10"> 
                        <div class="text-red-500" id="erName"></div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="flex flex-col">
                            <label for="">Giá gốc:</label>
                            <input id="originalPrice" type="text" placeholder="Giá gốc" value="${
                              itemProd.originalPrice
                            }"
                            class="w-full border rounded-md px-2 h-10">
                          <div class="text-red-500" id="erPrice"></div>
                        </div>
                        <div class="flex flex-col">
                            <label for="">Giá khuyến mãi:</label>
                            <input id="saleOffPrice" type="text" placeholder="Giá khuyến mãi " value="${
                              itemProd.saleOffPrice
                            }"
                            class="w-full border rounded-md px-2 h-10">
                        </div>
                        <div class="flex flex-col">
                        <label  >Danh Mục</label>
                        <select name="" id="category" class="w-full border rounded-md px-2 h-10">
                        <option value="${
                          itemProd.category
                        }">${idbyProd}</option>
                          ${listcate.data.map(
                            (item: any) => `
                          <option value="${item.id}">${item.name}</option>
                          `
                          )}
                        </select>
                    </div>
                    </div>   
                    <div class="gap-4 mt-4" >
                        <div class="flex flex-col">
                        <label for="">Đặt điểm nổi bật</label>
                        <textarea id="feature" class="w-full border rounded-md px-2 h-20">${
                          itemProd.feature
                        }</textarea>
                        <div class="text-red-500" id="erFeature"></div>
                        </div>                                           
                        <div class="flex flex-col mt-4">
                        <label for="">Mô tả dài</label>
                        <textarea id="description" class="w-full border rounded-md px-2 h-20">${
                          itemProd.description
                        }</textarea>
                        <div class="text-red-500" id="erLong"></div>
                    </div>
                </div> 
                <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full " id="btnAdd">Thêm mới</button>
                </div>
                </div>
            </div>        
            </div>
        </div>
        `;
  },
  afterRender: async (id) => {
    const formAdd = document.querySelector("#btnAdd");
    const imgPost = document.querySelector("#img-post");
    const imgPreview = document.querySelector("#preview-image");
    const erImg: any = document.querySelector("#erImg");
    const erName = document.querySelector("#erName");
    const erShort = document.querySelector("#erShort");
    const erPrice = document.querySelector("#erPrice");
    const erFeature = document.querySelector("#erFeature");
    const erLong = document.querySelector("#erLong");

    imgPost.addEventListener("change", function (e) {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });

    formAdd?.addEventListener("click", async function (e) {
      const name = document.querySelector("#name")?.value;
      const originalPrice = document.querySelector("#originalPrice")?.value;
      const image = imgPreview?.src;
      const saleOffPrice = document.querySelector("#saleOffPrice")?.value;
      const category = document.querySelector("#category")?.value;
      const feature = document.querySelector("#feature")?.value;
      const description = document.querySelector("#description")?.value;
      const shortDescription =
        document.querySelector("#shortDescription")?.value;

      if (name == "") {
        erName.innerHTML = "Chưa nhập tên cho sản phẩm";
      }
      if (originalPrice == "") {
        erPrice.innerHTML = "Chưa nhập giá cho sản phẩm";
      }
      if (description == "") {
        erLong.innerHTML = "Chưa nhập mô tả dài";
      }
      if (shortDescription == "") {
        erShort.innerHTML = "Chưa nhập mô tả ngắn cho sản phẩm";
      }
      if (feature == "") {
        erFeature.innerHTML = "Chưa nhập đặc điểm cho sản phẩm";
      }
      if (imgPreview.src == "") {
        erImg.innerHTML = "Chưa chọn ảnh cho sản phẩm";
      }
      if (
        name != "" &&
        originalPrice != "" &&
        description != "" &&
        shortDescription != "" &&
        feature != ""
      ) {
        console.log("1");

        const product: Product = {
          name: name,
          originalPrice: originalPrice,
          image: image,
          saleOffPrice: saleOffPrice,
          category: category,
          feature: feature,
          description: description,
          shortDescription: shortDescription,
          id: id,
        };
        // const product2: Product = {
        //   name,
        //   originalPrice,
        //   image,
        //   saleOffPrice,
        //   category,
        //   feature,
        //   description,
        //   shortDescription,
        // };

        const data = await Update(product);

        if (data) {
          alert("Sửa thành công");
        }
        window.location.href = "/admin";
      }
    });

    imgPost?.addEventListener("change", async (e) => {
      // console.log(e.target.files)
      const file = e.target.files[0];
      if (file.size > 250000) {
        erImg.innerHTML = "File quá lớn";
      }
      if (file === "") {
        erImg.innerHTML = "Chưa thêm ảnh";
      } else {
        erImg.innerHTML = "";
        const res = await UploadFile(file);
        const data = res.data;
        imgPreview.src = data.url;
      }
    });
  },
};

export default EditProductPage;

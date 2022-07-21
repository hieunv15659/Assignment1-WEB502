
import { get } from "../../../api/product";
import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"

 
const EditProductPage = {
    render: async (param) => {
        console.log(param)
        console.log(get);
        
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                <div>
                <h3> Cập nhật sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                    <div class="">
                        <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4">Thêm ảnh</div>
                        </div>
                        <label for="">Mô tả ngắn</label>
                    </div>
                    <div class="col-span-2">
                        <div>Thông tin sản phẩm</div>
                        <div class="flex flex-col mt-4">
                        <label for="">Tên sản phẩm:</label>
                        <input id="name" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-sm h-10">
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="flex flex-col">
                            <label for="">Giá gốc:</label>
                            <input id="originalPrice" type="text" placeholder="Giá gốc" class="w-full border rounded-sm h-10">
                        </div>
                        <div class="flex flex-col">
                            <label for="">Giá khuyến mãi:</label>
                            <input id="saleOffPrice" type="text" placeholder="Giá khuyến mãi" class="w-full border rounded-sm h-10">
                        </div>
                        <div class="flex flex-col">
                        <label  >Danh Mục</label>
                        <select class="w-full border rounded-sm h-10" id="category">
                        <option value="Labtop">Laptop</option>
                        <option value="Điện Thoại">Điện Thoại</option>
                        <option value="Máy Tính">Máy Tính</option>
                        <option value="Tai Nghe">Tai Nghe</option>
                        </select
                    </div>
                    </div>   
                    <div class="gap-4 mt-4" >
                        <div class="flex flex-col">
                        <label for="">Đặt điểm nổi bật</label>
                        <textarea class="w-full border" id="feature"></textarea>
                        </div>
                                           
                        <div class="flex flex-col mt-4">
                        <label for="">Mô tả dài</label>
                        <textarea class="w-full border" id="description"></textarea>
                    </div>
                </div> 
                <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full " id="add-product-btn">Thêm mới</button>
                </div>
                
                </div>
            </div>        
            </div>
        </div>
        `
    },

}

export default EditProductPage
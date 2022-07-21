import { upload } from "../../../api/image"
import { createProduct } from "../../../api/product"
import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"
import Product from "../../../model/product"

const AddProductPage = {
    render: async () => {
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                <div>
                <h3>Cập nhật sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                    <div  >
                        <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                        <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                    </label>
                        <div class="mt-4">Thêm ảnh</div>
                        <img id="preview-image" />
                        </div>
                        <label for="">Mô tả ngắn</label>
                        <textarea class="w-full border" id="shortDescription"></textarea>   
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
                      </select>
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
    afterRender: async () => {

        const addProductBtn = document.querySelector('#add-product-btn')
        const inputFile = document.querySelector('#input-file')
        const previewImage = document.querySelector('#preview-image')
        addProductBtn?.addEventListener('click', async (e) => {
            const name = document.querySelector('#name')?.value
            const originalPrice = document.querySelector('#originalPrice')?.value
            const imageUrl = previewImage?.src
            const saleOffPrice = document.querySelector('#saleOffPrice')?.value
            const category = document.querySelector('#category')?.value
            const feature = document.querySelector('#feature')?.value
            const description = document.querySelector('#description')?.value
            const shortDescription = document.querySelector('#shortDescription')?.valuez
 
            if (name == ''){
                alert("Bạn chưa cho tên sản phẩm");
                return false; 
            }else if (originalPrice == ''){
                alert("Bạn chưa cho giá sản phẩm");
                return false; 
            }else if (feature == ''){
                alert("Bạn chưa cho đặc điểm sản phẩm");
                return false; 
            }else if (description == ''){
                alert("Bạn chưa cho mô tả của sản phẩm");
                return false; 
            }

            const product = new Product(name,originalPrice,imageUrl,saleOffPrice,category,feature,description,shortDescription);
            try {
                const data = await createProduct(product)
                alert('Thêm mới thành công')
                location.href = "/admin"
            } catch(err) {
                console.log(err)
            }

        })

        inputFile?.addEventListener('change', async (e) => {
            // console.log(e.target.files)
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                 try {
                    const res = await upload(reader.result)
                    const data = res.data
                    previewImage.src = data.url
                 } catch(err) {
                    console.log(err)
                 }
            }


            // console.log('xxxxx')
        })
    }
}
 
 

export default AddProductPage
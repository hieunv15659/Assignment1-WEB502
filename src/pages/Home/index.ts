 
import UserHeader from "../../components/Header/User"
import HomeSidebar from "../../components/Sidebar/home"
 
 

const HomePage = {
    render: async () => {
        return /*html*/`
            ${UserHeader.render()} 
            <div class="mt-4">
            <div class="w-[250px] flex-none">
            ${HomeSidebar.render()}
            </div>
            </div>
            

        `
    },
}

export default HomePage
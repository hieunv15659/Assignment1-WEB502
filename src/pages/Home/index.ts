 
import UserHeader from "../../components/Header/User"
 

const HomePage = {
    render: async () => {
        return /*html*/`
            <div>${UserHeader.render()}</div>
            

        `
    },
}

export default HomePage
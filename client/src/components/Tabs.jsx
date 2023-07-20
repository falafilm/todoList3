import { TABS } from "../redux/actions/type";

const Tabs = () => {
    return (
        TABS.map(tab =>(
            <botton>
                {tab}
            </botton>
        ))
    )
}

export default Tabs;
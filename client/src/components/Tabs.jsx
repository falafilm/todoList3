import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";

const Tabs = ({currentTab}) => {
    const dispatch  = useDispatch();
    return (
        TABS.map(tab =>(
            <botton 
                className={tab === currentTab ? "button selected" : "button"}
                onClick = {() => dispatch(toggleTab(tab))}
                
            >
                {tab}
            </botton>
        ))
    )
}

export default Tabs;
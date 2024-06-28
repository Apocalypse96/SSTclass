import { useEffect, useState } from "react";

import { loadCategories } from "../../stores/Categories";
import { useDispatch } from "react-redux";
function Categories() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://run.mocky.io/v3/9bb30d9f-8182-48c6-b03c-8ac3ff8be813").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            setCategories(res);
        })
        dispatch(loadCategories());
    },[])
    return (<div>
        {categories.map((item)=> {
            return(
            <div key={item.id}>{item.name}</div>)
        })}
    </div>)
}
export default Categories;
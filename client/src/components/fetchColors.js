import { axiosWithAuth } from "./utils.js/axiosWithAuth";

 const fetchColors = () =>{
    return axiosWithAuth().get(`/colors`).then(res => {
        return res
    })
  }

  export default fetchColors;

import { BiCartDownload } from "react-icons/bi";

const CartWidget = () => {
    return(
        <div style={{display: "flex", 
        marginRight:"20px",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between"}}>
            <BiCartDownload size = {30} />
            10
        </div>
    );
};

export default CartWidget; 
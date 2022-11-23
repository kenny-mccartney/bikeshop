import EditBike from "./edit-bike";
import { useParams } from "react-router-dom";

function EditBikeWithId() {

    const { id } = useParams();
    console.log(id);

    return (
        <>
            <EditBike id={id} />
        </>
    );
}

export default EditBikeWithId;
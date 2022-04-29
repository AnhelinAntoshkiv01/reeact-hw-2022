import {useDispatch} from "react-redux";

import {carActions} from "../../redux/slices";

const Car = ({car, car: {id, model, price,year}}) => {
    const dispatch = useDispatch();

    const deleteById = async() => {
      await dispatch(carActions.deleteById({id}));
    }
    return (
        <div>
            {id}  {model}  {price}  {year}
            <button onClick={deleteById}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>Update</button>
        </div>
    )
};

export {Car};
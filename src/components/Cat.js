import {useDispatch} from 'react-redux';

import {actionsCat} from '../redux';

export const Cat = ({cat}) => {
  const dispatch = useDispatch();

  return (
      <div>
          {cat.name}
          <button onClick={() => dispatch(actionsCat.setCatForUpdate({cat}))}>Update</button>
          <button onClick={() => dispatch(actionsCat.deleteCat({id: cat.id}))}>Delete</button>
      </div>
  )
}
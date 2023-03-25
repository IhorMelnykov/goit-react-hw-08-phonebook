import { Div ,Label, FormInput } from './Filter.styled';
import {useDispatch} from 'react-redux';
import { filterContacts } from '../../redux/slice/filterSlice';
import {useSelector} from 'react-redux';

export const Filter = () => {
    const dispatch = useDispatch();

    const value = useSelector(state => state.filter);

    const changeFilter = e => {
       dispatch(filterContacts(e.currentTarget.value));
      };
    
    return(
        <Div>
            <Label htmlFor="filter">Find contacts by name
                <FormInput 
                type="text" 
                value={value} 
                name="filter" 
                onChange={changeFilter} />
            </Label>
        </Div>
    )
}

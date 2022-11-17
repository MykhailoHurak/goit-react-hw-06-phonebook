import css from './ContactFilter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

function ContactFilter() {

    const value = useSelector(state => state.filter.value);
    const dispatch = useDispatch();
    const handleChange = event => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className={css.ContactFilter}>
            <p>Find contacts by name</p>
            <input
                type="text"
                className={css.ContactFilter__input}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default ContactFilter;

// HW-04 ==========================================================================

// import PropTypes from 'prop-types';
// import css from './ContactFilter.module.css';


// function ContactFilter({filter, onFilter}) {
//     return (
//         <div className={css.ContactFilter}>
//             <p>Find contacts by name</p>
//             <input
//                 type="text"
//                 className={css.ContactFilter__input}
//                 value={filter}
//                 onChange={onFilter}
//             />
//         </div>
//     )
// }

// ContactFilter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     onFilter: PropTypes.func.isRequired,
// };

// export default ContactFilter;
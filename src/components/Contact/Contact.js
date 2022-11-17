import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts';

function Contact({ id, name, number }) {

    const dispatch = useDispatch();

    const deleteContact = () => {
        dispatch(deleteContacts(id));
    };

    return (
        <li className={css.Contact}>
            {name + ': ' + number}
            <button
                className={css.Contact__button}
                onClick={() => deleteContact()}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;

// HW-04 ==========================================================================

// import PropTypes from 'prop-types';
// import css from './Contact.module.css';

// function Contact({ id, name, number, onDeleteContact }) {
//     return (
//         <li className={css.Contact}>
//             {name + ': ' + number}
//             <button
//                 className={css.Contact__button}
//                 onClick={() => onDeleteContact(id)}
//             >
//                 Delete
//             </button>
//         </li>
//     );
// }

// Contact.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// };

// export default Contact;
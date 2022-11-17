import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';

function ContactFilter({filter, onFilter}) {
    return (
        <div className={css.ContactFilter}>
            <p>Find contacts by name</p>
            <input
                type="text"
                className={css.ContactFilter__input}
                value={filter}
                onChange={onFilter}
            />
        </div>
    )
}

ContactFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import './ContactList.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <table className="List-table">
      <tbody>
        {contacts.map(({ name, number, id }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => onDeleteContact(id)}>
                del
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getContactList = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  return {
    contacts: getContactList(items, filter),
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

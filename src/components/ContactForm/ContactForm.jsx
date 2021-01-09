import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions';
import './ContactForm.css';
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Fill all fields!');
      return;
    }
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form-label">
        Name
        <input
          className="Form-input"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className="Form-label">
        Number
        <input
          className="Form-input"
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addContact(data)),
});
export default connect(null, mapDispatchToProps)(ContactForm);

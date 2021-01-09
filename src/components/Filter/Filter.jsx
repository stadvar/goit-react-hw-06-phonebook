import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/actions';
const Filter = ({ onFilter }) => {
  return (
    <label>
      <input type="text" name="filter" onChange={onFilter} />
    </label>
  );
};
Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onFilter: event => dispatch(filterContact(event.target.value)),
});
export default connect(null, mapDispatchToProps)(Filter);

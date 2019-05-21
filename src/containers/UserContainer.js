import { connect } from 'react-redux';
import User from '../components/User';
import { updateUser } from '../actions/user';

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.entities[ownProps.userId] };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser(name) {
      dispatch(updateUser(ownProps.userId, name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

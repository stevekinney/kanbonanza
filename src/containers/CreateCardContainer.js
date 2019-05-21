import { connect } from 'react-redux';

import CreateCard from '../components/CreateCard';
import { createCard } from '../actions/list';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCard(data) {
      dispatch(createCard(ownProps.listId, data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateCard);

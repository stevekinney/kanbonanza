import { connect } from 'react-redux';
import CreateList from '../components/CreateList';

import { createList } from '../actions/list';

const mapDispatchToProps = (dispatch) => {
  return {
    createList(data) {
      dispatch(createList(data));
    }
  }
};

export default connect(null, mapDispatchToProps)(CreateList);

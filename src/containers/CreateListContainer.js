import { connect } from 'react-redux';
import CreateList from '../components/CreateList';
import { bindActionCreators } from 'redux'

import { createList } from '../actions/list';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createList }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateList);

import List from '../components/List';
import { connect } from 'react-redux';
import { removeList } from '../actions/list';

const mapDispatchToProps = {
  removeList,
}

export default connect(null, mapDispatchToProps)(List);

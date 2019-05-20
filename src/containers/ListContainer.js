import List from '../components/List';
import { connect } from 'react-redux';
import { removeList } from '../actions/list';

const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.entities[ownProps.listId] };
};

const mapDispatchToProps = {
  removeList,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

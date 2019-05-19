import { connect } from 'react-redux';
import CreateList from '../components/CreateList';

const mapDispatchToProps = (dispatch) => {
  return {
    createList({ title }) {
      dispatch({
        type: 'LIST_CREATE',
        payload: { title }
      });
    }
  }
};

export default connect(null, mapDispatchToProps)(CreateList);

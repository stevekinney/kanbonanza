import { connect } from 'react-redux';

import Card from '../components/Card';
import { removeCard } from '../actions/list';

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    removeCard() {
      dispatch(removeCard(ownProps.list.id, ownProps.card.id))
    }
  })
}

export default connect(null, mapDispatchToProps)(Card);

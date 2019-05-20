import { connect } from 'react-redux';

import Card from '../components/Card';
import { removeCard } from '../actions/list';

const mapStateToProps = (state, ownProps) => {
  return { card: state.cards.entities[ownProps.cardId] }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    removeCard() {
      dispatch(removeCard(ownProps.listId, ownProps.cardId))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import { connect } from 'react-redux';
import { moveCardToList } from '../actions/card';
import CardMove from '../components/CardMove';

const mapStateToProps = (state) => {
  return {
    lists: Object.values(state.lists.entities)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveCardToList(event) {
      const destinationListId = event.target.value;
      dispatch(moveCardToList(ownProps.cardId, ownProps.listId, destinationListId));

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardMove);

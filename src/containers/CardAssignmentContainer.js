import { connect } from 'react-redux';
import CardAssignment from '../components/CardAssignment';
import { assignCardToUser } from '../actions/card';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.entities[ownProps.cardId]
  return {
    card,
    users: Object.values(state.users.entities),
    user: state.users.entities[card.assignedTo]
  }
};

const mapDispatchToProps = {
  assignCardToUser
};

export default connect(mapStateToProps, mapDispatchToProps)(CardAssignment);

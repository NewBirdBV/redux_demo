import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
    active:ownProps.filter === state.visibilityFilter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        //console.log(setVisibilityFilter(ownProps.filter));
        dispatch(setVisibilityFilter(ownProps.filter));
    }
})
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
export default FilterLink;
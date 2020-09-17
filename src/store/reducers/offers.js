import  * as actionTypes from '../actions/types'
import { updateObject } from '../../utils/utils';


const initialState = {
    offers: {},
    skills: [],
    languages: [],
    jobs: [],
    locations: {},
}

const addSkill = (state, action) => {
    const skills = state.push(action.skill);
    return {...state, skills }
}

const removeSkill = (state, action) => {
    const skills = state.push(action.skill);
    return {...state, skills }
}

const fetchOffersRequest = (state, action) => {
    return updateObject( state, {
        offers: { r: true, payload: state.offers }
    });
}

const fetchOffersSuccess = (state, action) => {
    return updateObject( state, {
        offers: { s: true, payload: action.offers }
    });
}

const fetchOffersFail = (state, action) => {
    return updateObject( state, {
        offers: { f: true }
    });

}

const offersReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_SKILL: return addSkill( state, action );
        case actionTypes.FETCH_OFFERS_REQUEST: return fetchOffersRequest( state, action );
        case actionTypes.FETCH_OFFERS_SUCCESS: return fetchOffersSuccess( state, action );
        case actionTypes.FETCH_OFFERS_FAIL: return fetchOffersFail( state, action );
        default: return state;
    }
};

export default offersReducer;
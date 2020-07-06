import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants'
import shortid from 'shortid'

const flashMessages = (state = [], action = {}) => {
  switch(action.type) {
		case ADD_FLASH_MESSAGE:
			return [
				...state,
        {
					id: shortid.generate(),
					type: action.message.type,
					text: action.message.text
				}
			]
		case DELETE_FLASH_MESSAGE:
			const index = state.findIndex(item => item.id === action.id)
			if (index >= 0) {
				return [...state.splice(0, index), ...state.splice(index+1)]
			}
			return state
		default:
			return state	
	}
}

export default flashMessages
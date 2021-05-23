import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './reducers/session'

export default configureStore({
  reducer: {
    session: sessionReducer  
  }
})

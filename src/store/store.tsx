// Importing reduxStorage from a custom storage file, which will be used for persisting the state
import {reduxStorage} from './storage';

// Importing configureStore from Redux Toolkit to create the Redux store
import {configureStore} from '@reduxjs/toolkit';

// Importing createSagaMiddleware to handle side effects (async operations like API calls) in Redux
import createSagaMiddleware from 'redux-saga';

// Importing persistReducer and persistStore from redux-persist to enable state persistence
import {persistReducer, persistStore} from 'redux-persist';

// Importing the root reducer, which combines all individual reducers in the application
import rootReducer from './rootReducer';

// Importing the root saga, which contains all saga functions (asynchronous actions)
import rootSaga from './rootSaga';

// Creating an instance of Redux-Saga middleware, which is used to manage side effects
const sagaMiddleware = createSagaMiddleware();

// Configuration object for redux-persist
const persistConfig = {
  key: 'root', // Unique key for storing persisted data in the storage
  storage: reduxStorage, // Storage engine where the persisted data will be saved (e.g., localStorage, AsyncStorage)
  whitelist: ['cart', 'account'], // List of reducers that should be persisted (saved and restored)
  blacklist: [], // List of reducers that should NOT be persisted (empty in this case)
};

// Enhancing the root reducer with persistence capabilities using persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating the Redux store using configureStore from Redux Toolkit
export const store = configureStore({
  reducer: persistedReducer, // Setting the persisted root reducer for state management
  middleware: (
    getDefaultMiddleware, // Adding middleware to the store
  ) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling serializable check to avoid warnings/errors related to non-serializable values
    }).concat(sagaMiddleware), // Adding sagaMiddleware to handle asynchronous operations
});

// Running the root saga to start watching for saga actions
sagaMiddleware.run(rootSaga);

// Creating the persistor object to enable persistence and rehydrate the store on app reload
export const persistor = persistStore(store);

// Defining a TypeScript type for the RootState, which represents the entire state structure
export type RootState = ReturnType<typeof store.getState>;

// Defining a TypeScript type for AppDispatch, which represents the type of dispatch function
export type AppDispatch = typeof store.dispatch;

// Key Concepts Explained:
// 1. Redux Toolkit (configureStore)
// configureStore is used instead of the traditional createStore to simplify store setup, automatically enabling good defaults like Redux DevTools and middleware.
// 2. Redux-Persist (persistReducer, persistStore)
// Helps persist the Redux state even after the page reloads, using a specified storage engine.
// The persistReducer wraps around the root reducer to enable persistence.
// persistStore creates a persistor instance to handle saving/loading the persisted state.
// 3. Redux-Saga (createSagaMiddleware)
// Handles side effects in Redux, such as API calls, background tasks, and async operations.
// Sagas listen for dispatched actions and run predefined async operations.
// 4. Middleware (getDefaultMiddleware)
// Redux Toolkit provides a getDefaultMiddleware function that automatically includes essential middleware (like serializableCheck).
// serializableCheck: false disables Redux’s warning about non-serializable data in the store (useful when dealing with objects like Dates, Promises, or non-serializable APIs).
// concat(sagaMiddleware) appends the saga middleware to the existing ones.
// 5. TypeScript Types (RootState, AppDispatch)
// RootState is used to infer the shape of the global state.
// AppDispatch ensures the correct dispatch types for Redux actions.
// Summary
// Redux Toolkit is used to configure and manage the store.
// Redux Persist allows the state to be saved and restored.
// Redux Saga is used for handling async operations in a controlled manner.
// Middleware is configured to include both default and custom middlewares.
// TypeScript Types are used for better type safety in state and dispatch.
// This setup ensures a scalable and maintainable Redux architecture. 🚀 Let me know if you need further clarifications!

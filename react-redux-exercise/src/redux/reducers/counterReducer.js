import { COUNTER_ACTIONS } from "../actions/actionTypes";

// * Reducer'lar Pure JS function'laridır. Pure function'lar, dışarıdan gelen variable'i degistirmeyip(mutate) yerine yeni bir variable döndüren function'lardir. Bu yüzden reducer'lar mevcut state'i alır ve yeni bir state döndürür. Reducer'lar action'lardan tetiklenir ve bu nedenle state ve action object'ini parametre olarak alır. Aşağıda bir counter reducer örneği bulunmaktadır.

// * Reducer, öncelikle action type'ına bakar, action'a göre yapması gerekeni yapar, yeni bir state'i store'a döndürür ve bu store'u da gunceller.

const initialState = {
  counter: 0,
};

export const counterReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREASE_COUNTER:
      console.log({
        counter: currentState.counter + action.payload,
      });
      return {
        ...currentState,
        counter: currentState.counter + action.payload,
      };
    case COUNTER_ACTIONS.DECREASE_COUNTER:
      console.log({
        counter: currentState.counter - action.payload,
      });
      return {
        ...currentState,
        counter: currentState.counter - action.payload,
      };
    case COUNTER_ACTIONS.RESET_COUNTER:
      console.log(initialState);
      return initialState;
    default:
      // ! Redux reducer switch-case default'unda throw error atmayip currentState'i dondurmek best practicetir.
      //  URL -> https://stackoverflow.com/questions/55877893/why-return-default-case-instead-of-throw-in-reduxs-reducer

      // throw new Error(`Unknow action type: ${action.type}`)
      // ! Bu satir Redux store ilk baslatildiginda default olarak calisacaktir cunku ilk baslatmada action.type tanimlanmamis olacaktir.
      // console.log(`Unknow action type: ${action.type}`);
      return currentState;
  }
};

import { COUNTER_ACTIONS } from "./actionTypes";

// * ➤ Action'lar, type ve payload (veri) key'lerini içeren düz JS object'leridir.
// * ➤ View'den, verilerin verildiği action'lar tetiklenir ve ardından tetiklenen action reducer'a iletilir:

// * ➤ Increment, decrement ve reset için action'lara bakildiginda, bu action object'lerinin normalde type ve payload'a sahip olduğu gorulebilir, ancak bu ornekteki increment ve decrement işlemleri parametreye ihtiyaç duymamaktadır.

export const increaseWithoutPayload = () => {
  return {
    type: COUNTER_ACTIONS.INCREASE_COUNTER,
  };
};

export const decreaseWithoutPayload = () => {
  return {
    type: COUNTER_ACTIONS.DECREASE_COUNTER,
  };
};

export const reset = () => {
  return {
    type: COUNTER_ACTIONS.RESET_COUNTER,
  };
};

// * ➤ Eğer parametrelere ihtiyaç duyulursa, action'ın payload'ı aracılığıyla iletilebilir:

export const increase = (payload) => {
  return {
    type: COUNTER_ACTIONS.INCREASE_COUNTER,
    payload: payload,
  };
};

export const decrease = (payload) => {
  return {
    type: COUNTER_ACTIONS.DECREASE_COUNTER,
    payload: payload,
  };
};

// * Her iki action da dispatch edildiğinde, reducer hangi action type'ına göre bir şeyler yapması gerektiğini bilecektir.

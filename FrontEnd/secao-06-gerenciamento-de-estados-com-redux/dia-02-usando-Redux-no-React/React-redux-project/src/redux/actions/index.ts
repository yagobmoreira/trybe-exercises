export const actionCreator = (increment = 1) => {
  return {
    type: 'INCREMENT',
    payload: increment,
  }
}


export const actionCounterClicks = {
  type: 'COUNTER_CLICKS',
}
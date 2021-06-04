const INIT_STATE = {
  days: [
    { day: 30, active: false, childItemsEvents: [] },
    { day: 31, active: false, childItemsEvents: [] },
    { day: 1, active: true, childItemsEvents: [] },
    { day: 2, active: true, childItemsEvents: [] },
    { day: 3, active: true, childItemsEvents: [] },
    { day: 4, active: true, childItemsEvents: [] },
    { day: 5, active: true, childItemsEvents: [] },
    { day: 6, active: true, childItemsEvents: [] },
    { day: 7, active: true, childItemsEvents: [] },
    { day: 8, active: true, childItemsEvents: [] },
    { day: 9, active: true, childItemsEvents: [] },
    { day: 10, active: true, childItemsEvents: [] },
    { day: 11, active: true, childItemsEvents: [] },
    { day: 12, active: true, childItemsEvents: [] },
    { day: 13, active: true, childItemsEvents: [] },
    { day: 14, active: true, childItemsEvents: [] },
    { day: 15, active: true, childItemsEvents: [] },
    { day: 16, active: true, childItemsEvents: [] },
    { day: 17, active: true, childItemsEvents: [] },
    { day: 18, active: true, childItemsEvents: [] },
    { day: 19, active: true, childItemsEvents: [] },
    { day: 20, active: true, childItemsEvents: [] },
    { day: 21, active: true, childItemsEvents: [] },
    { day: 22, active: true, childItemsEvents: [] },
    { day: 23, active: true, childItemsEvents: [] },
    { day: 24, active: true, childItemsEvents: [] },
    { day: 25, active: true, childItemsEvents: [] },
    { day: 26, active: true, childItemsEvents: [] },
    { day: 27, active: true, childItemsEvents: [] },
    { day: 28, active: true, childItemsEvents: [] },
    { day: 29, active: true, childItemsEvents: [] },
    { day: 30, active: true, childItemsEvents: [] },
    { day: 1, active: false, childItemsEvents: [] },
    { day: 2, active: false, childItemsEvents: [] },
    { day: 3, active: false, childItemsEvents: [] }
  ]
}

const Reducer = (state = INIT_STATE, action) => {
  var index = 0
  var indexEvent = 0
  var arrDays = []
  switch (action.type) {
    case 'ADD_EVENT':
      index = state.days.findIndex(data => data.day === parseInt(action.payload.fecha.split('-')[2]) && data.active)
      arrDays = [...state.days]
      arrDays[index].childItemsEvents = [
        ...arrDays[index].childItemsEvents,
        action.payload
      ]
      return {
        ...state,
        days: arrDays,
      };
    case 'UPDATE_EVENT':
      index = state.days.findIndex(data => data.day === parseInt(action.payload.fecha.split('-')[2]) && data.active)
      arrDays = [...state.days]
      indexEvent = arrDays[index].childItemsEvents.findIndex(data => data.id === action.payload.id)
      arrDays[index].childItemsEvents[indexEvent] = action.payload

      return {
        ...state,
        days: arrDays,
      };
    case 'DELETE_EVENT':
      index = state.days.findIndex(data => data.day === parseInt(action.payload.fecha.split('-')[2]))
      arrDays = [...state.days]
      indexEvent = arrDays[index].childItemsEvents.findIndex(data => data.id === action.payload.id)
      arrDays[index].childItemsEvents.splice(indexEvent,1)

      return {
        ...state,
        days: arrDays,
      };
    default:
      return state;
  }
}

export default Reducer

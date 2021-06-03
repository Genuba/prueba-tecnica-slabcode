const INIT_STATE = {days: [
    {day: 30,active: false ,childItemsEvents:[]},
    {day: 31,active: false ,childItemsEvents:[]},
    {day: 1,active: true ,childItemsEvents:[]},
    {day: 2,active: true ,childItemsEvents:[]},
    {day: 3,active: true ,childItemsEvents:[]},
    {day: 4,active: true ,childItemsEvents:[]},
    {day: 5,active: true ,childItemsEvents:[]},
    {day: 6,active: true ,childItemsEvents:[]},
    {day: 7,active: true ,childItemsEvents:[]},
    {day: 8,active: true ,childItemsEvents:[]},
    {day: 9,active: true ,childItemsEvents:[]},
    {day: 10,active: true ,childItemsEvents:[]},
    {day: 11,active: true ,childItemsEvents:[]},
    {day: 12,active: true ,childItemsEvents:[]},
    {day: 13,active: true ,childItemsEvents:[]},
    {day: 14,active: true ,childItemsEvents:[]},
    {day: 15,active: true ,childItemsEvents:[]},
    {day: 16,active: true ,childItemsEvents:[]},
    {day: 17,active: true ,childItemsEvents:[]},
    {day: 18,active: true ,childItemsEvents:[]},
    {day: 19,active: true ,childItemsEvents:[]},
    {day: 20,active: true ,childItemsEvents:[]},
    {day: 21,active: true ,childItemsEvents:[]},
    {day: 22,active: true ,childItemsEvents:[]},
    {day: 23,active: true ,childItemsEvents:[]},
    {day: 24,active: true ,childItemsEvents:[]},
    {day: 25,active: true ,childItemsEvents:[]},
    {day: 26,active: true ,childItemsEvents:[]},
    {day: 27,active: true ,childItemsEvents:[]},
    {day: 28,active: true ,childItemsEvents:[]},
    {day: 29,active: true ,childItemsEvents:[]},
    {day: 30,active: true ,childItemsEvents:[]},
    {day: 1,active: false ,childItemsEvents:[]},
    {day: 2,active: false ,childItemsEvents:[]},
    {day: 3,active: false ,childItemsEvents:[]}
  ]}

const Reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case 1:
        return {
          ...state,
          activeLogoBg: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default Reducer
  
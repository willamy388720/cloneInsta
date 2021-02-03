import { ADD_POST } from "../actions/actionTypes";

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'Rafael Pereira Filho',
    email: 'rafaelprrflh@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: [{
      nickname: 'Alonso Onso',
      comment: 'Meu sertão'
    },
    {
      nickname: 'Anonymus Desconhecido',
      comment: 'A seca daí, só perde pra xereca da tua mulher'
    }]
  }, {
    id: Math.random(),
    nickname: 'Francisco Leandro Lima',
    email: 'fllima@gmail.com',
    image: require('../../../assets/imgs/bw.jpg'),
    comments: []
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
      }

    default:
      return state
  }
}

export default reducer
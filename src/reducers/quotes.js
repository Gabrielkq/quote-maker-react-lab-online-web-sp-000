export default (state = [ {
  id: '23423424242-42342423424242-fafdb',
  content: 'One Awesome Quote',
  author: 'Luke Ghenco'
}], action) => {

  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.payload]
    default:
    return state;}
}

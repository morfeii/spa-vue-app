/* eslint-disable no-param-reassign */
export default {
  state: {
    notes: [
      {
        id: 1,
        title: 'First',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 2,
        title: 'Second',
        description: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.',
      },
      {
        id: 3,
        title: 'Third',
        description: 'Voluptatum ducimus voluptates voluptas?',
      },
    ],
  },
  mutations: {
    createNote(state, payload) {
      state.notes.push(payload);
    },
  },
  actions: {
    createNote({ commit }, payload) {
      payload.id = Math.random();

      commit('createNote', payload);
    },
  },
  getters: {
    notes(state) {
      return state.notes;
    },
    myNotes(state) {
      return state.notes;
    },
    noteById(state) {
      return (noteId) => state.notes.find((note) => note.id === +noteId);
    },
  },
};

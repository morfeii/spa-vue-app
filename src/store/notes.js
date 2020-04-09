/* eslint-disable no-param-reassign */
import * as fb from 'firebase';

class Note {
  constructor(title, description, ownerId, id = null) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.id = id;
  }
}

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
    async createNote({ commit, getters }, payload) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const newNote = new Note(
          payload.title,
          payload.description,
          getters.user.id,
        );

        const note = await fb.database().ref('notes').push(newNote);
        commit('setLoading', false);
        commit('createNote', {
          ...newNote,
          id: note.key,
        });
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
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

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
      // {
      //   id: '1',
      //   title: 'First',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      // },
      // {
      //   id: '2',
      //   title: 'Second',
      //   description: 'Eligendi non quis exercitationem rit optio amet ab quasi cupiditate.',
      // },
      // {
      //   id: '3',
      //   title: 'Third',
      //   description: 'Voluptatum ducimus voluptates voluptas?',
      // },
    ],
  },
  mutations: {
    createNote(state, payload) {
      state.notes.push(payload);
    },
    loadNotes(state, payload) {
      state.notes = payload;
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
    async fetchNotes({ commit }) {
      commit('clearError');
      commit('setLoading', true);

      const resultNotes = [];

      try {
        const fbVal = await fb.database().ref('notes').once('value');
        const notes = fbVal.val();

        Object.keys(notes).forEach((key) => {
          const note = notes[key];
          resultNotes.push(
            new Note(note.title, note.description, note.ownerId, key),
          );
        });
        commit('loadNotes', resultNotes);
        commit('setLoading', false);
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
      return (noteId) => state.notes.find((note) => note.id === noteId);
    },
  },
};

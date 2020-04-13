import * as fb from 'firebase';

class Comment {
  constructor(name, comment, noteId, date, id = null) {
    this.name = name;
    this.comment = comment;
    this.noteId = noteId;
    this.date = date;
    this.id = id;
  }
}

export default {
  state: {
    comments: [],
  },
  mutations: {
    loadComments(state, payload) {
      state.comments = payload;
    },
  },
  actions: {
    async createComment({ commit }, {
      name, comment, noteId, ownerId, date,
    }) {
      const newComment = new Comment(name, comment, noteId, date);
      commit('clearError');

      try {
        await fb.database().ref(`/users/${ownerId}/comments`).push(newComment);
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },
    async fetchComments({ commit, getters }) {
      commit('setLoading', true);
      commit('clearError');

      const resultComments = [];

      try {
        const fbVal = await fb.database().ref(`/users/${getters.user.id}/comments`).once('value');
        const comments = fbVal.val();

        Object.keys(comments).forEach((key) => {
          const c = comments[key];
          resultComments.push(
            new Comment(c.name, c.comment, c.noteId, c.date, key),
          );
        });
        commit('loadComments', resultComments);
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
      }
    },
    async markCommentDone({ commit, getters }, payload) {
      commit('clearError');
      try {
        await fb.database().ref(`/users/${getters.user.id}/comments/`).child(payload).update({
          done: true,
        });
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },
  },
  getters: {
    comments(state) {
      return state.comments;
    },
  },
};

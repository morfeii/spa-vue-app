import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Note from '@/components/Notes/Note.vue';
import NewNote from '@/components/Notes/NewNote.vue';
import NotesList from '@/components/Notes/NotesList.vue';
import Saved from '@/components/User/Saved.vue';
import Login from '@/components/Auth/Login.vue';
import Registration from '@/components/Auth/Registration.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/note/:id',
      props: true,
      name: 'note',
      component: Note,
    },
    {
      path: '/list',
      name: 'list',
      component: NotesList,
    },
    {
      path: '/new',
      name: 'newNote',
      component: NewNote,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration,
    },
    {
      path: '/saved',
      name: 'saved',
      component: Saved,
    },
  ],
});

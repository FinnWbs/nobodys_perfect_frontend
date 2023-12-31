import { createRouter, createWebHistory } from 'vue-router'
import GameList from "@/components/GameList.vue";
import GameLobby from "@/components/GameLobby.vue";
import CreateGameForm from "@/components/CreateGameForm.vue";
import JoinGame from "@/components/JoinGame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameList
    },
    { path: '/game/create', component: CreateGameForm },
    { path: '/game/:id', component: GameLobby },
    { path: '/game/:id/join', component: JoinGame },
  ]
})

export default router

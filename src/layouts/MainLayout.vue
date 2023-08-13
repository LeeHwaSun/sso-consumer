<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div class="row items-center q-gutter-x-xs">
          <LogoutBtn v-if="isLogin">로그아웃</LogoutBtn>
          <template v-else>
            <LoginBtn>로그인</LoginBtn>
            <JoinBtn>회원가입</JoinBtn>
          </template>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LoginBtn from 'src/components/auth/LoginBtn.vue'
import JoinBtn from 'src/components/auth/JoinBtn.vue'
import LogoutBtn from 'src/components/auth/LogoutBtn.vue'
import { mapState } from 'pinia'
import useUser from "src/stores/useUser";

export default defineComponent({
  components: { LoginBtn, JoinBtn, LogoutBtn },
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    ...mapState(useUser, ['isLogin'])
  }
})
</script>

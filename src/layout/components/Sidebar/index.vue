<template>
  <div>
    <!-- 测试展开收起 -->
    <h6 @click="isCollapse=!isCollapse">展收测试</h6>

    <el-menu
      class="sidebar-container-menu"
      mode="vertical"
      :default-active="activeMenu"
      :background-color="scssVariables.menuBg"
      :text-color="scssVariables.menuText"
      :active-text-color="scssVariables.menuActiveText"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <sidebar-item
        v-for="route in menuRoutes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
// 导入scss变量在组件中使用
import variables from '@/styles/variables.scss'
import { routes } from '@/router'
// el-menu-item封装
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const route = useRoute()
    // 根据路由路径 对应 当前激活的菜单 页面刷新后 激活当前路由匹配的菜单
    const activeMenu = computed(() => {
      const { path, meta } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    // scss变量
    const scssVariables = computed(() => variables)
    // 菜单展开收起状态 后面会放store里
    const isCollapse = ref(false)

    // 渲染路由
    const menuRoutes = computed(() => routes)

    return {
      // ...toRefs(variables), // 不有toRefs原因 缺点variables里面变量属性来源不明确
      scssVariables,
      isCollapse,
      activeMenu,
      menuRoutes
    }
  }
})
</script>

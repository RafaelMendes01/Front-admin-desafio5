import Sidebar from './SideBar.vue'
import SidebarLink from './SidebarLink.vue'
import Store from '../../store/index'

const SidebarStore = {
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    }
  ],
  displaySidebar (value) {
    if(value === true){
      Store.state.IsOpenSideBar = "sidebarShow"
    }
    else if(value === false){
      Store.state.IsOpenSideBar = ""
    }
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
    Vue.component('sidebar-link', SidebarLink)
  }
}

export default SidebarPlugin

import Vue from 'vue'
import Router from 'vue-router'
import BaseForm from '@/components/page/BaseForm'
import BaseCharts from '@/components/page/BaseCharts'
import BaseTable from '@/components/page/BaseTable'
import Readme from '@/components/page/Readme'
import MixCharts from '@/components/page/MixCharts'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
	      path: '/',
	      name: 'Readme',
	      component: Readme
	    }, {
	      path: '/BaseForm',
	      name: 'BaseForm',
	      component: BaseForm
	    }, {
	      path: '/BaseCharts',
	      name: 'BaseCharts',
	      component: BaseCharts
	    }, {
	      path: '/BaseTable',
	      name: 'BaseTable',
	      component: BaseTable
	    }, {
	      path: '/Readme',
	      name: 'Readme',
	      component: Readme
	    }, {
	      path: '/MixCharts',
	      name: 'MixCharts',
	      component: MixCharts
	    }
  	]
})

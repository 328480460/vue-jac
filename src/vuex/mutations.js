import router from '../router/index.js';

export default {
	addTab(state,obj) {
		// console.log(obj);
		if(state.tabList.indexOf(obj) === -1) {
			state.tabList.push(obj);
		} 
		state.currentId = (obj.index).toString();
		//重新定义路由
		router.push({ path: obj.name})
	},
	delTab(state,index){
		state.tabList = state.tabList.filter((item) =>{
			return	item.index !== index;
		});
		//将当前选中设置为首页
		state.currentId = '1-1';
		//重新定义路由
		router.push({ path: 'Readme'})
	},
	turn(state,params) {
		// console.log(params);
		state.currentId = params.name;
		//重新定义路由
		router.push({ path: params.label});
	}
}
import AppComponent from '../components/app';
import IndexComponent from '../components/index';

console.log('AppComponent', AppComponent);
console.log('IndexComponent', IndexComponent);

const routes = {
	path: '',
	component: AppComponent,
	childRoutes: [
		{
			path: '/',
			component: IndexComponent
		}
	]
};

export { routes };

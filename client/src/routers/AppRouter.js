import { Switch, Route } from 'react-router-dom';
import UsersPage from '../pages/admin/UsersPage';
import LoginPage from '../pages/LoginPage';
import SalesPage from '../pages/SalesPage';
import ProductsPage from '../pages/admin/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage'


export default function AppRouter() {
	return (
		<Switch>
			<Route exact path='/login' component={LoginPage} />
			<Route exact path='/sales' component={SalesPage} />
			<Route exact path='/products' component={ProductsPage} />
			<Route exact path='/users' component={UsersPage} />

			<Route path="*" component={NotFoundPage} />
		</Switch>
	);
}
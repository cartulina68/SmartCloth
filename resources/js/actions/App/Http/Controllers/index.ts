import Auth from './Auth'
import CategoriaController from './CategoriaController'
import ColorController from './ColorController'
import ProductoController from './ProductoController'
import TallaController from './TallaController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
CategoriaController: Object.assign(CategoriaController, CategoriaController),
ColorController: Object.assign(ColorController, ColorController),
ProductoController: Object.assign(ProductoController, ProductoController),
TallaController: Object.assign(TallaController, TallaController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers
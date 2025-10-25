import Auth from './Auth'
import CategoriaController from './CategoriaController'
import ColorController from './ColorController'
import RoleController from './RoleController'
import GeneroController from './GeneroController'
import TallaController from './TallaController'
import ImagenController from './ImagenController'
import UserController from './UserController'
import ProductoController from './ProductoController'
import ValoracionController from './ValoracionController'
import ComentarioController from './ComentarioController'
import ProductoVarianteController from './ProductoVarianteController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
CategoriaController: Object.assign(CategoriaController, CategoriaController),
ColorController: Object.assign(ColorController, ColorController),
RoleController: Object.assign(RoleController, RoleController),
GeneroController: Object.assign(GeneroController, GeneroController),
TallaController: Object.assign(TallaController, TallaController),
ImagenController: Object.assign(ImagenController, ImagenController),
UserController: Object.assign(UserController, UserController),
ProductoController: Object.assign(ProductoController, ProductoController),
ValoracionController: Object.assign(ValoracionController, ValoracionController),
ComentarioController: Object.assign(ComentarioController, ComentarioController),
ProductoVarianteController: Object.assign(ProductoVarianteController, ProductoVarianteController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers
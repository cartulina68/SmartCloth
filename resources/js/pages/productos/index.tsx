import ProductoController from '@/actions/App/Http/Controllers/ProductoController';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';

type Producto = {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria_id: number;
    genero_id: number;
    categoria: { id: number; nombre: string };
    genero: { id: number; nombre: string };
};

interface Props {
    productos: Producto[];
    categorias: { id: number; nombre: string }[];
    generos: { id: number; genero: string }[];
}

export default function ProductoIndex({ productos }: Props) {
    return (
        <AppLayout>
            <Head title="Productos" />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Productos</h1>
                    <Button onClick={() => router.get(ProductoController.create.url())}>Nuevo Producto</Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Listado</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-2">Nombre</th>
                                        <th className="p-2">Categoría</th>
                                        <th className="p-2">Género</th>
                                        <th className="p-2">Precio</th>
                                        <th className="p-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((producto) => (
                                        <tr
                                            key={producto.id}
                                            className="border-t"
                                        >
                                            <td className="p-2">
                                                {producto.nombre}
                                            </td>
                                            <td className="p-2">
                                                {producto.categoria?.nombre}
                                            </td>
                                            <td className="p-2">
                                                {producto.genero?.nombre}
                                            </td>
                                            <td className="p-2">
                                                {Number(
                                                    producto.precio,
                                                ).toFixed(2)}
                                            </td>
                                            <td className="space-x-2 p-2">
                                                {/* <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                        openEdit(producto.id)
                                                    }
                                                >
                                                    Editar
                                                </Button> */}
                                                {/* <Button size="sm" variant="destructive" onClick={() => handleDelete(producto.id)}>Eliminar</Button> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

import CreateProductoModal from '@/components/productos/create-producto-modal';
import EditProductoModal from '@/components/productos/edit-producto-modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { route } from 'ziggy-js';

type Producto = {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria_id: number;
    genero_id: number;
    categoria: { id: number; nombre: string };
    genero: { id: number; genero: string };
};

interface Props {
    productos: Producto[];
    categorias: { id: number; nombre: string }[];
    generos: { id: number; genero: string }[];
}

export default function ProductoIndex({
    productos,
    categorias,
    generos,
}: Props) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editing, setEditing] = useState<Producto | null>(null);

    function openCreate() {
        setEditing(null);
        setCreateOpen(true);
    }

    async function openEdit(id: number) {
        try {
            const url = route('productos.show', id);
            const res = await fetch(url);
            const data = await res.json();
            setEditing(data);
            setEditOpen(true);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <AppLayout>
            <Head title="Productos" />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Productos</h1>
                    <Button onClick={openCreate}>Nuevo Producto</Button>
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
                                                {producto.genero?.genero}
                                            </td>
                                            <td className="p-2">
                                                {Number(
                                                    producto.precio,
                                                ).toFixed(2)}
                                            </td>
                                            <td className="space-x-2 p-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                        openEdit(producto.id)
                                                    }
                                                >
                                                    Editar
                                                </Button>
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

            <CreateProductoModal
                open={createOpen}
                onOpenChange={(open) => setCreateOpen(open)}
                categorias={categorias}
                generos={generos}
            />

            <EditProductoModal
                open={editOpen}
                onOpenChange={(open) => setEditOpen(open)}
                producto={editing ?? undefined}
                categorias={categorias}
                generos={generos}
            />
        </AppLayout>
    );
}

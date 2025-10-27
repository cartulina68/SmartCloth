import ProductoController from '@/actions/App/Http/Controllers/ProductoController';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import DeleteProductoModal from './components/delete-producto-modal';
import { useState } from 'react';

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
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleting, setDeleting] = useState<Producto | null>(null);

    function openDelete(id: number) {
        const producto = productos.find((producto) => producto.id === id);

        if (!producto) {
            console.error('Categoría no encontrada');
            return;
        }

        setDeleting(producto);
        setDeleteOpen(true);
    }

    const handleEdit = (productoId: number) => {
        router.get(ProductoController.show.url({ producto: productoId }));
    };

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
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Categoría</TableHead>
                                        <TableHead>Género</TableHead>
                                        <TableHead>Precio</TableHead>
                                        <TableHead>Acciones</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {productos.map((producto) => (
                                        <TableRow key={producto.id}>
                                            <TableCell>
                                                {producto.nombre}
                                            </TableCell>
                                            <TableCell>
                                                {producto.categoria?.nombre}
                                            </TableCell>
                                            <TableCell>
                                                {producto.genero?.nombre}
                                            </TableCell>
                                            <TableCell>
                                                {Number(producto.precio).toFixed(2)}
                                            </TableCell>
                                            <TableCell className="space-x-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleEdit(producto.id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() => openDelete(producto.id)}
                                                >
                                                    Eliminar
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <DeleteProductoModal
                open={deleteOpen}
                onOpenChange={(open) => setDeleteOpen(open)}
                producto={deleting ?? undefined}
            />
        </AppLayout>
    );
}

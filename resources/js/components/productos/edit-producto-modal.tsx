import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { ProductoForm } from './producto-form';

type Producto = {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria_id: number;
    genero_id: number;
};

export default function EditProductoModal({
    open,
    onOpenChange,
    producto,
    categorias,
    generos,
    onSaved,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    producto?: Producto | null;
    categorias: { id: number; nombre: string }[];
    generos: { id: number; genero: string }[];
    onSaved?: () => void;
}) {
    if (!producto) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle>Editar Producto</DialogTitle>
                    <DialogClose asChild>
                        <Button variant="ghost">Cerrar</Button>
                    </DialogClose>
                </DialogHeader>

                <Form
                    action={route('productos.update', producto.id)}
                    method="put"
                    options={{ preserveScroll: true }}
                    onSuccess={() => {
                        onOpenChange(false);
                        onSaved?.();
                    }}
                    className="space-y-4"
                >
                    <ProductoForm
                        producto={producto}
                        categorias={categorias}
                        generos={generos}
                        errors={{}}
                    />

                    <DialogFooter className="mt-4 gap-2">
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Actualizar</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

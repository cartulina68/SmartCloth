import ProductoController from '@/actions/App/Http/Controllers/ProductoController';
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
import { ProductoForm } from './producto-form';

export default function CreateProductoModal({
    open,
    onOpenChange,
    categorias,
    generos,
    onSaved,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    categorias: { id: number; nombre: string }[];
    generos: { id: number; genero: string }[];
    onSaved?: () => void;
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle>Nuevo Producto</DialogTitle>
                    <DialogClose asChild>
                        <Button variant="ghost">Cerrar</Button>
                    </DialogClose>
                </DialogHeader>

                <Form
                    {...ProductoController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={() => {
                        onOpenChange(false);
                        onSaved?.();
                    }}
                    className="space-y-4"
                >
                    <ProductoForm
                        categorias={categorias}
                        generos={generos}
                        errors={{}}
                    />

                    <DialogFooter className="mt-4 gap-2">
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>

                        <Button type="submit">Guardar</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

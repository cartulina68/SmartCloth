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

type Producto = {
    id: number;
    nombre: string;
};

export default function DeleteProductoModal({
    open,
    onOpenChange,
    producto,
    onSaved,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    producto: Producto | undefined;
    onSaved?: () => void;
}) {
    if (!producto) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-m">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle>Eliminar Producto</DialogTitle>
                </DialogHeader>

                <Form
                    {...ProductoController.destroy.form(producto.id)}
                    options={{ preserveScroll: true }}
                    onSuccess={() => {
                        onOpenChange(false);
                        onSaved?.();
                    }}
                    className="space-y-4"
                >
                    {({ processing }: { processing: boolean }) => (
                        <>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    ¿Estás seguro que deseas eliminar el producto{' '}
                                    <strong>"{producto.nombre}"</strong>?
                                </div>
                            </div>

                            <DialogFooter className="mt-4 gap-2">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </DialogClose>

                                <Button
                                    variant="destructive"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Eliminar
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

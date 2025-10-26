import CategoriaController from '@/actions/App/Http/Controllers/CategoriaController';
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

type Categoria = {
    id: number;
    nombre: string;
    descripcion?: string;
};

export default function DeleteCategoriaModal({
    open,
    onOpenChange,
    categoria,
    onSaved,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    categoria?: Categoria | null;
    onSaved?: () => void;
}) {
    if (!categoria) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-m">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle>Eliminar Categoría</DialogTitle>
                </DialogHeader>

                <Form
                    {...CategoriaController.destroy.form(categoria.id)}
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
                                    ¿Estás seguro que deseas eliminar la
                                    categoría{' '}
                                    <strong>"{categoria.nombre}"</strong>?
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

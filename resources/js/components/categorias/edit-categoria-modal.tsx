import CategoriaController from '@/actions/App/Http/Controllers/CategoriaController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form } from '@inertiajs/react';

type Categoria = {
    id: number;
    nombre: string;
    descripcion?: string;
};

export default function EditCategoriaModal({
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
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle>Editar Categoría</DialogTitle>
                </DialogHeader>

                <Form
                    {...CategoriaController.update.form(categoria.id)}
                    options={{ preserveScroll: true }}
                    onSuccess={() => {
                        onOpenChange(false);
                        onSaved?.();
                    }}
                    className="space-y-4"
                >
                    {({
                        processing,
                        errors,
                    }: {
                        processing: boolean;
                        errors?: Record<string, string | string[] | undefined>;
                    }) => (
                        <>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nombre">Nombre</Label>
                                    <Input
                                        id="nombre"
                                        name="nombre"
                                        defaultValue={categoria.nombre}
                                        required
                                        maxLength={100}
                                    />
                                    <InputError
                                        message={
                                            errors?.nombre as string | undefined
                                        }
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="descripcion">
                                        Descripción
                                    </Label>
                                    <Textarea
                                        id="descripcion"
                                        name="descripcion"
                                        defaultValue={
                                            categoria.descripcion ?? ''
                                        }
                                        rows={4}
                                    />
                                    <InputError
                                        message={
                                            errors?.descripcion as
                                                | string
                                                | undefined
                                        }
                                    />
                                </div>
                            </div>

                            <DialogFooter className="mt-4 gap-2">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </DialogClose>

                                <Button type="submit" disabled={processing}>
                                    Actualizar
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

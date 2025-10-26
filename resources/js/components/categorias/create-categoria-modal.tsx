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

export default function CreateCategoriaModal({
    open,
    onOpenChange,
    onSaved,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSaved?: () => void;
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader className="flex items-center justify-between">
                    <DialogTitle>Nueva Categoría</DialogTitle>
                </DialogHeader>

                <Form
                    {...CategoriaController.store.form()}
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
                                    Guardar
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

import CreateColorModal from '@/components/colores/create-color-modal';
import EditColorModal from '@/components/colores/edit-color-modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

type Color = {
    id: number;
    nombre: string;
    codigo_hex: string;
};

interface Props {
    colores: Color[];
}

export default function ColoresIndex({ colores }: Props) {
    const [editOpen, setEditOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [editing, setEditing] = useState<Color | null>(null);

    function openCreate() {
        setCreateOpen(true);
    }

    function openEdit(id: number) {
        const color = colores.find((color) => color.id === id);

        if (!color) {
            console.error('Categoría no encontrada');
            return;
        }

        setEditing(color);
        setEditOpen(true);
    }

    return (
        <AppLayout>
            <Head title="Colores" />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Colores</h1>
                    <Button onClick={openCreate}>Nuevo Color</Button>
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
                                        <th className="p-2">Código Hex</th>
                                        <th className="p-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {colores.map((col) => (
                                        <tr key={col.id} className="border-t">
                                            <td className="p-2">
                                                {col.nombre}
                                            </td>
                                            <td className="p-2">
                                                <span
                                                    className="mr-2 inline-block h-5 w-5 rounded"
                                                    style={{
                                                        backgroundColor:
                                                            col.codigo_hex,
                                                    }}
                                                ></span>
                                                {col.codigo_hex}
                                            </td>
                                            <td className="space-x-2 p-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                        openEdit(col.id)
                                                    }
                                                >
                                                    Editar
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <CreateColorModal
                open={createOpen}
                onOpenChange={(open) => setCreateOpen(open)}
            />

            <EditColorModal
                open={editOpen}
                onOpenChange={(open) => setEditOpen(open)}
                color={editing ?? undefined}
            />
        </AppLayout>
    );
}

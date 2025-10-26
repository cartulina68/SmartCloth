import CreateTallaModal from '@/components/tallas/create-talla-modal';
import EditTallaModal from '@/components/tallas/edit-talla-modal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

type Talla = {
    id: number;
    key: string;
    nombre: string;
    orden?: number;
};

interface Props {
    tallas: Talla[];
}

export default function TallaIndex({ tallas }: Props) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editing, setEditing] = useState<Talla | null>(null);

    function openCreate() {
        setEditing(null);
        setCreateOpen(true);
    }

    async function openEdit(id: number) {
        const talla = tallas.find((talla) => talla.id === id);

        if (!talla) {
            console.error('Talla no encontrada');
            return;
        }

        setEditing(talla);
        setEditOpen(true);
    }

    return (
        <AppLayout>
            <Head title="Tallas" />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Tallas</h1>
                    <Button onClick={openCreate}>Nueva Talla</Button>
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
                                        <th className="p-2">Key</th>
                                        <th className="p-2">Nombre</th>
                                        <th className="p-2">Orden</th>
                                        <th className="p-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tallas.map((talla) => (
                                        <tr key={talla.id} className="border-t">
                                            <td className="p-2">{talla.key}</td>
                                            <td className="p-2">
                                                {talla.nombre}
                                            </td>
                                            <td className="p-2">
                                                {talla.orden}
                                            </td>
                                            <td className="space-x-2 p-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                        openEdit(talla.id)
                                                    }
                                                >
                                                    Editar
                                                </Button>
                                                {/* <Button size="sm" variant="destructive" onClick={() => handleDelete(talla.id)}>Eliminar</Button> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <CreateTallaModal
                open={createOpen}
                onOpenChange={(open) => setCreateOpen(open)}
            />

            <EditTallaModal
                open={editOpen}
                onOpenChange={(open) => setEditOpen(open)}
                talla={editing ?? undefined}
            />
        </AppLayout>
    );
}

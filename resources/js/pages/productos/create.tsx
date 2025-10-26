import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { VarianteForm } from './components/variante-form';

interface CreateProductoProps {
    categorias: Array<{
        id: number;
        nombre: string;
    }>;
    generos: Array<{
        id: number;
        nombre: string;
    }>;
    colores: Array<{
        id: number;
        nombre: string;
        codigo_hex: string;
    }>;
    tallas: Array<{
        id: number;
        key: string;
        nombre: string;
    }>;
}

interface Variante {
    color_id: number;
    talla_id: number;
    precio: number;
    stock: number;
    imagenes: File[];
}

export default function CreateProducto({
    categorias,
    generos,
    colores,
    tallas,
}: CreateProductoProps) {
    const [variantes, setVariantes] = useState<Variante[]>([]);

    const form = useForm({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria_id: '',
        genero_id: '',
        variantes: [] as Variante[],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (variantes.length === 0) {
            alert('Debes agregar al menos una variante');
            return;
        }

        form.submit('post', '/admin/productos', {
            forceFormData: true,
            onError: (errors) => {
                console.error('Errores de validación:', errors);
            },
            onSuccess: () => {
                window.location.href = '/admin/productos';
            },
        });
    };

    const handleAddVariante = () => {
        setVariantes([
            ...variantes,
            {
                color_id: 0,
                talla_id: 0,
                precio: parseFloat(form.data.precio) || 0,
                stock: 0,
                imagenes: [],
            },
        ]);
    };

    const handleUpdateVariante = (index: number, data: Variante) => {
        const newVariantes = [...variantes];
        newVariantes[index] = data;

        console.log('Variante actualizada:', data);
        setVariantes(newVariantes);
        form.setData('variantes', newVariantes);
    };

    const handleRemoveVariante = (index: number) => {
        setVariantes(variantes.filter((_, i) => i !== index));
    };

    return (
        <AppLayout>
            <Head title="Crear Producto" />

            <div className="container py-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Crear Producto</CardTitle>
                        <CardDescription>
                            Ingresa los datos del producto y sus variantes
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Nombre</Label>
                                    <Input
                                        type="text"
                                        value={form.data.nombre}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.setData('nombre', e.target.value)}
                                        placeholder="Nombre del producto"
                                    />
                                    {form.errors.nombre && (
                                        <p className="text-sm text-red-500">{form.errors.nombre}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label>Precio Base</Label>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={form.data.precio}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.setData('precio', e.target.value)}
                                        placeholder="0.00"
                                    />
                                    {form.errors.precio && (
                                        <p className="text-sm text-red-500">{form.errors.precio}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label>Categoría</Label>
                                    <Select
                                        value={form.data.categoria_id}
                                        onValueChange={value => form.setData('categoria_id', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una categoría" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categorias.map((categoria) => (
                                                <SelectItem
                                                    key={categoria.id}
                                                    value={categoria.id.toString()}
                                                >
                                                    {categoria.nombre}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {form.errors.categoria_id && (
                                        <p className="text-sm text-red-500">{form.errors.categoria_id}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label>Género</Label>
                                    <Select
                                        value={form.data.genero_id}
                                        onValueChange={value => form.setData('genero_id', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona un género" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {generos.map((genero) => (
                                                <SelectItem
                                                    key={genero.id}
                                                    value={genero.id.toString()}
                                                >
                                                    {genero.nombre}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {form.errors.genero_id && (
                                        <p className="text-sm text-red-500">{form.errors.genero_id}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Descripción</Label>
                                <Textarea
                                    value={form.data.descripcion}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => form.setData('descripcion', e.target.value)}
                                    placeholder="Describe el producto..."
                                />
                                {form.errors.descripcion && (
                                    <p className="text-sm text-red-500">{form.errors.descripcion}</p>
                                )}
                            </div>

                            <Separator className="my-6" />

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">
                                        Variantes del Producto
                                    </h3>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleAddVariante}
                                    >
                                        Agregar Variante
                                    </Button>
                                </div>

                                {variantes.map((variante, index) => (
                                    <VarianteForm
                                        key={index}
                                        index={index}
                                        variante={variante}
                                        colores={colores}
                                        tallas={tallas}
                                        onUpdate={handleUpdateVariante}
                                        onRemove={handleRemoveVariante}
                                    />
                                ))}

                                {variantes.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        No has agregado ninguna variante aún
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => window.history.back()}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={
                                        form.processing ||
                                        variantes.length === 0 ||
                                        !form.data.nombre ||
                                        !form.data.precio ||
                                        !form.data.categoria_id ||
                                        !form.data.genero_id
                                    }
                                >
                                    {form.processing ? 'Creando...' : 'Crear Producto'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

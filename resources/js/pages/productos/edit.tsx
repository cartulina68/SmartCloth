import { useState, useEffect } from 'react';
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
import { VarianteEditForm } from './components/variante-edit-form';

interface Imagen {
    id: number;
    path: string;
    descripcion: string;
}

interface VarianteExistente {
    id: number;
    color_id: number;
    talla_id: number;
    precio: number;
    stock: number;
    imagenes: Imagen[];
    imagenes_eliminar: number[];
    imagenes_nuevas: File[];
}

interface VarianteNueva {
    color_id: number;
    talla_id: number;
    precio: number;
    stock: number;
    imagenes_nuevas: File[];
}

type Variante = VarianteExistente | VarianteNueva;

interface EditProductoProps {
    producto: {
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        categoria_id: number;
        genero_id: number;
        variantes: Array<{
            id: number;
            color_id: number;
            talla_id: number;
            precio: number;
            stock: number;
            color: {
                id: number;
                nombre: string;
                codigo_hex: string;
            };
            talla: {
                id: number;
                key: string;
                nombre: string;
            };
            imagenes: Imagen[];
        }>;
    };
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

export default function EditProducto({
    producto,
    categorias,
    generos,
    colores,
    tallas,
}: EditProductoProps) {
    const [variantes, setVariantes] = useState<Variante[]>(
        producto.variantes.map(v => ({
            id: v.id,
            color_id: v.color_id,
            talla_id: v.talla_id,
            precio: v.precio,
            stock: v.stock,
            imagenes: v.imagenes,
            imagenes_eliminar: [],
            imagenes_nuevas: [],
        }))
    );
    const [variantesEliminar, setVariantesEliminar] = useState<number[]>([]);

    const form = useForm({
        nombre: producto.nombre,
        descripcion: producto.descripcion || '',
        precio: producto.precio.toString(),
        categoria_id: producto.categoria_id.toString(),
        genero_id: producto.genero_id.toString(),
        variantes: [] as Variante[],
        variantes_eliminar: [] as number[],
    });

    useEffect(() => {
        form.setData('variantes', variantes);
        form.setData('variantes_eliminar', variantesEliminar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variantes, variantesEliminar]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const variantesActivas = variantes.filter(v => {
            if ('id' in v) {
                return !variantesEliminar.includes(v.id);
            }
            return true;
        });

        if (variantesActivas.length === 0) {
            alert('Debes tener al menos una variante');
            return;
        }

        form.submit('post', `/admin/productos/${producto.id}`, {
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
                imagenes_nuevas: [],
            } as VarianteNueva,
        ]);
    };

    const handleUpdateVariante = (index: number, data: Variante) => {
        const newVariantes = [...variantes];
        newVariantes[index] = data;
        setVariantes(newVariantes);
    };

    const handleRemoveVariante = (index: number) => {
        const variante = variantes[index];

        if ('id' in variante) {
            // Es una variante existente, marcarla para eliminación
            setVariantesEliminar([...variantesEliminar, variante.id]);
        } else {
            // Es una variante nueva, simplemente removerla del estado
            setVariantes(variantes.filter((_, i) => i !== index));
        }
    };

    const handleRestoreVariante = (varianteId: number) => {
        setVariantesEliminar(variantesEliminar.filter(id => id !== varianteId));
    };

    const isVarianteMarkedForDeletion = (variante: Variante) => {
        if ('id' in variante) {
            return variantesEliminar.includes(variante.id);
        }
        return false;
    };

    return (
        <AppLayout>
            <Head title={`Editar ${producto.nombre}`} />

            <div className="container py-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Editar Producto</CardTitle>
                        <CardDescription>
                            Modifica los datos del producto y sus variantes
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
                                        onChange={(e) => form.setData('nombre', e.target.value)}
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
                                        onChange={(e) => form.setData('precio', e.target.value)}
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
                                    onChange={(e) => form.setData('descripcion', e.target.value)}
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
                                    <VarianteEditForm
                                        key={'id' in variante ? `existing-${variante.id}` : `new-${index}`}
                                        index={index}
                                        variante={variante}
                                        colores={colores}
                                        tallas={tallas}
                                        onUpdate={handleUpdateVariante}
                                        onRemove={handleRemoveVariante}
                                        onRestore={handleRestoreVariante}
                                        isMarkedForDeletion={isVarianteMarkedForDeletion(variante)}
                                    />
                                ))}

                                {variantes.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        No hay variantes disponibles
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
                                        !form.data.nombre ||
                                        !form.data.precio ||
                                        !form.data.categoria_id ||
                                        !form.data.genero_id
                                    }
                                >
                                    {form.processing ? 'Guardando...' : 'Guardar Cambios'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

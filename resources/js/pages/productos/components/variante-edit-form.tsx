import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageUploader } from './image-uploader';
import { X, RotateCcw } from 'lucide-react';

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

interface VarianteEditFormProps {
    index: number;
    variante: Variante;
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
    onUpdate: (index: number, variante: Variante) => void;
    onRemove: (index: number) => void;
    onRestore?: (varianteId: number) => void;
    isMarkedForDeletion?: boolean;
}

export function VarianteEditForm({
    index,
    variante,
    colores,
    tallas,
    onUpdate,
    onRemove,
    onRestore,
    isMarkedForDeletion = false,
}: VarianteEditFormProps) {
    const isExisting = 'id' in variante;

    const handleChange = (field: string, value: string | number | File[]) => {
        onUpdate(index, {
            ...variante,
            [field]: value,
        });
    };

    const handleRemoveExistingImage = (imagenId: number) => {
        if (!isExisting) return;

        const imagenesEliminar = [...(variante.imagenes_eliminar || [])];
        if (!imagenesEliminar.includes(imagenId)) {
            imagenesEliminar.push(imagenId);
        }

        onUpdate(index, {
            ...variante,
            imagenes_eliminar: imagenesEliminar,
        });
    };

    const handleRestoreImage = (imagenId: number) => {
        if (!isExisting) return;

        const imagenesEliminar = variante.imagenes_eliminar.filter(
            id => id !== imagenId
        );

        onUpdate(index, {
            ...variante,
            imagenes_eliminar: imagenesEliminar,
        });
    };

    const isImageMarkedForDeletion = (imagenId: number) => {
        if (!isExisting) return false;
        return variante.imagenes_eliminar.includes(imagenId);
    };

    const getRemainingImagesCount = () => {
        if (!isExisting) return variante.imagenes_nuevas.length;

        const existingCount = variante.imagenes.length - variante.imagenes_eliminar.length;
        const newCount = variante.imagenes_nuevas?.length || 0;
        return existingCount + newCount;
    };

    if (isMarkedForDeletion) {
        return (
            <Card className="border-2 border-red-300">
                <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Badge variant="destructive">Marcada para eliminar</Badge>
                            <span className="text-sm text-gray-600">
                                Esta variante será eliminada al guardar
                            </span>
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => isExisting && onRestore?.(variante.id)}
                        >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Restaurar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent className="p-4">
                {isExisting && (
                    <div className="mb-3">
                        <Badge variant="secondary">Variante existente</Badge>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={`color-${index}`}>Color</Label>
                        <Select
                            value={variante.color_id.toString()}
                            onValueChange={(value) =>
                                handleChange('color_id', parseInt(value))
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecciona un color" />
                            </SelectTrigger>
                            <SelectContent>
                                {colores.map((color) => (
                                    <SelectItem
                                        key={color.id}
                                        value={color.id.toString()}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{
                                                    backgroundColor: color.codigo_hex,
                                                }}
                                            />
                                            {color.nombre}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={`talla-${index}`}>Talla</Label>
                        <Select
                            value={variante.talla_id.toString()}
                            onValueChange={(value) =>
                                handleChange('talla_id', parseInt(value))
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecciona una talla" />
                            </SelectTrigger>
                            <SelectContent>
                                {tallas.map((talla) => (
                                    <SelectItem
                                        key={talla.id}
                                        value={talla.id.toString()}
                                    >
                                        {talla.nombre} ({talla.key})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={`precio-${index}`}>Precio</Label>
                        <Input
                            id={`precio-${index}`}
                            type="number"
                            step="0.01"
                            value={variante.precio}
                            onChange={(e) =>
                                handleChange('precio', parseFloat(e.target.value))
                            }
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={`stock-${index}`}>Stock</Label>
                        <Input
                            id={`stock-${index}`}
                            type="number"
                            value={variante.stock}
                            onChange={(e) =>
                                handleChange('stock', parseInt(e.target.value))
                            }
                        />
                    </div>
                </div>

                {/* Imágenes Existentes */}
                {isExisting && variante.imagenes.length > 0 && (
                    <div className="mt-4">
                        <Label className="mb-2 block">Imágenes Actuales</Label>
                        <div className="grid grid-cols-4 gap-2">
                            {variante.imagenes.map((imagen) => {
                                const markedForDeletion = isImageMarkedForDeletion(imagen.id);
                                return (
                                    <div
                                        key={imagen.id}
                                        className={`relative group ${
                                            markedForDeletion ? 'opacity-50' : ''
                                        }`}
                                    >
                                        <img
                                            src={`/storage/${imagen.path}`}
                                            alt={imagen.descripcion}
                                            className="w-full h-24 object-cover rounded-md"
                                        />
                                        {markedForDeletion ? (
                                            <Button
                                                type="button"
                                                size="icon"
                                                variant="secondary"
                                                className="absolute top-1 right-1 h-6 w-6"
                                                onClick={() => handleRestoreImage(imagen.id)}
                                            >
                                                <RotateCcw className="w-3 h-3" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="button"
                                                size="icon"
                                                variant="destructive"
                                                className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => handleRemoveExistingImage(imagen.id)}
                                            >
                                                <X className="w-3 h-3" />
                                            </Button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Nuevas Imágenes */}
                <div className="mt-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={`imagenes-${index}`}>
                            {isExisting ? 'Agregar Nuevas Imágenes' : 'Imágenes'}
                        </Label>
                        <ImageUploader
                            files={variante.imagenes_nuevas}
                            onChange={(files: File[]) =>
                                handleChange('imagenes_nuevas', files)
                            }
                        />
                        {getRemainingImagesCount() === 0 && (
                            <p className="text-sm text-red-500">
                                Debes tener al menos una imagen
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => onRemove(index)}
                    >
                        {isExisting ? 'Marcar para Eliminar' : 'Eliminar Variante'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

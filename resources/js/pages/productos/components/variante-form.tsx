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
import { ImageUploader } from './image-uploader';

interface VarianteFormProps {
    index: number;
    variante: {
        color_id: number;
        talla_id: number;
        precio: number;
        stock: number;
        imagenes: File[];
    };
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
    onUpdate: (index: number, variante: {
        color_id: number;
        talla_id: number;
        precio: number;
        stock: number;
        imagenes: File[];
    }) => void;
    onRemove: (index: number) => void;
}

export function VarianteForm({
    index,
    variante,
    colores,
    tallas,
    onUpdate,
    onRemove,
}: VarianteFormProps) {
    const handleChange = (field: string, value: string | number | File[]) => {
        onUpdate(index, {
            ...variante,
            [field]: value,
        });
    };

    return (
        <Card>
            <CardContent className="p-4">
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

                <div className="mt-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={`imagenes-${index}`}>Imágenes</Label>
                        <ImageUploader
                            files={variante.imagenes}
                            onChange={(files: File[]) => handleChange('imagenes', files)}
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => onRemove(index)}
                    >
                        Eliminar Variante
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

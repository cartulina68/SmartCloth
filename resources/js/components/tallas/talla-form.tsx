import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TallaFormProps {
    talla?: {
        id?: number;
        key: string;
        nombre: string;
        orden?: number;
    };
    errors?: Record<string, string | string[] | undefined>;
}

export function TallaForm({ talla, errors = {} }: TallaFormProps) {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="key">Key</Label>
                <Input
                    id="key"
                    name="key"
                    defaultValue={talla?.key ?? ''}
                    required
                    maxLength={10}
                />
                {errors.key && (
                    <span className="text-sm text-red-500">{errors.key}</span>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                    id="nombre"
                    name="nombre"
                    defaultValue={talla?.nombre ?? ''}
                    required
                    maxLength={50}
                />
                {errors.nombre && (
                    <span className="text-sm text-red-500">
                        {errors.nombre}
                    </span>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="orden">Orden</Label>
                <Input
                    id="orden"
                    name="orden"
                    type="number"
                    defaultValue={talla?.orden ?? 0}
                />
                {errors.orden && (
                    <span className="text-sm text-red-500">{errors.orden}</span>
                )}
            </div>
        </div>
    );
}

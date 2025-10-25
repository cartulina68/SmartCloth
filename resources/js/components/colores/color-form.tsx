import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ColorFormProps {
  colorData?: {
    id?: number
    nombre: string
    codigo_hex: string
  }
  errors?: Record<string, string | string[] | undefined>
}

export function ColorForm({ colorData, errors = {} }: ColorFormProps) {
  return (
    <div className="space-y-4">
      {/* Campo: nombre */}
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre del color</Label>
        <Input
          id="nombre"
          name="nombre"
          defaultValue={colorData?.nombre ?? ''}
          required
          maxLength={50}
        />
        {errors.nombre && (
          <span className="text-sm text-red-500">{errors.nombre}</span>
        )}
      </div>

      {/* Campo: código HEX */}
      <div className="space-y-2">
        <Label htmlFor="codigo_hex">Código HEX</Label>
        <Input
          id="codigo_hex"
          name="codigo_hex"
          defaultValue={colorData?.codigo_hex ?? ''}
          required
          maxLength={7}
          placeholder="#FFFFFF"
        />
        {errors.codigo_hex && (
          <span className="text-sm text-red-500">{errors.codigo_hex}</span>
        )}
      </div>
    </div>
  )
}

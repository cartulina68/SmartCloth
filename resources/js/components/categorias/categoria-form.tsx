import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface CategoriaFormProps {
  categoria?: {
    id?: number
    nombre: string
    descripcion?: string
  }
  // Inertia errors object has string keys and values that may be strings or arrays
  errors?: Record<string, string | string[] | undefined>
}

export function CategoriaForm({ categoria, errors = {} }: CategoriaFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          defaultValue={categoria?.nombre ?? ''}
          required
          maxLength={100}
        />
        {errors.nombre && (
          <span className="text-sm text-red-500">{errors.nombre}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea
          id="descripcion"
          name="descripcion"
          defaultValue={categoria?.descripcion ?? ''}
          rows={4}
        />
        {errors.descripcion && (
          <span className="text-sm text-red-500">{errors.descripcion}</span>
        )}
      </div>
    </div>
  )
}

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ProductoFormProps {
  producto?: {
    id?: number
    nombre: string
    descripcion?: string
    precio: number
    categoria_id: number
    genero_id: number
  }
  categorias: { id: number; nombre: string }[]
  generos: { id: number; genero: string }[]
  errors?: Record<string, string | string[] | undefined>
}

export function ProductoForm({ producto, categorias, generos, errors = {} }: ProductoFormProps) {
  return (
    <div className="space-y-4">
      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          defaultValue={producto?.nombre ?? ''}
          required
          maxLength={150}
        />
        {errors.nombre && <span className="text-sm text-red-500">{errors.nombre}</span>}
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea
          id="descripcion"
          name="descripcion"
          defaultValue={producto?.descripcion ?? ''}
          rows={4}
        />
        {errors.descripcion && <span className="text-sm text-red-500">{errors.descripcion}</span>}
      </div>

      {/* Precio */}
      <div className="space-y-2">
        <Label htmlFor="precio">Precio</Label>
        <Input
          id="precio"
          name="precio"
          type="number"
          step="0.01"
          defaultValue={producto?.precio ?? 0}
          required
        />
        {errors.precio && <span className="text-sm text-red-500">{errors.precio}</span>}
      </div>

      {/* Categoría */}
      <div className="space-y-2">
        <Label>Categoría</Label>
        <Select defaultValue={producto?.categoria_id ? String(producto.categoria_id) : ''}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            {categorias.map(cat => (
              <SelectItem key={cat.id} value={String(cat.id)}>
                {cat.nombre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.categoria_id && <span className="text-sm text-red-500">{errors.categoria_id}</span>}
      </div>

      {/* Género */}
      <div className="space-y-2">
        <Label>Género</Label>
        <Select defaultValue={producto?.genero_id ? String(producto.genero_id) : ''}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un género" />
          </SelectTrigger>
          <SelectContent>
            {generos.map(gen => (
              <SelectItem key={gen.id} value={String(gen.id)}>
                {gen.genero}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.genero_id && <span className="text-sm text-red-500">{errors.genero_id}</span>}
      </div>
    </div>
  )
}

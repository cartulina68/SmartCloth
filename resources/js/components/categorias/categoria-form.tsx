import { useForm } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { route } from 'ziggy-js';

interface CategoriaFormProps {
  categoria?: {
    id?: number
    nombre: string
    descripcion?: string
  }
  isEditing?: boolean
  onSuccess?: (categoria?: any) => void
}

export function CategoriaForm({ categoria, isEditing = false, onSuccess }: CategoriaFormProps) {
  const { data, setData, post, put, processing, errors } = useForm({
    nombre: categoria?.nombre || '',
    descripcion: categoria?.descripcion || '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isEditing && categoria?.id) {
      put(route('categorias.update', categoria.id), {
        onSuccess: (page) => onSuccess?.(page?.props ?? undefined),
      })
    } else {
      post(route('categorias.store'), {
        onSuccess: (page) => onSuccess?.(page?.props ?? undefined),
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? 'Editar Categoría' : 'Nueva Categoría'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              value={data.nombre}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('nombre', e.target.value)}
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
              value={data.descripcion}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('descripcion', e.target.value)}
              rows={4}
            />
            {errors.descripcion && (
              <span className="text-sm text-red-500">{errors.descripcion}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button
            variant="outline"
            type="button"
            onClick={() => window.history.back()}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={processing}>
            {isEditing ? 'Actualizar' : 'Guardar'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

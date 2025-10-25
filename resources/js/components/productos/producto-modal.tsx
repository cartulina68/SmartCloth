import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import ProductoController from '@/actions/App/Http/Controllers/ProductoController'
import { route } from 'ziggy-js'
import { ProductoForm } from './producto-form'

type Producto = {
  id?: number
  nombre: string
  descripcion?: string
  precio: number
  categoria_id: number
  genero_id: number
}

export default function ProductoModal({
  open,
  onOpenChange,
  mode = 'create',
  producto,
  categorias,
  generos,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode?: 'create' | 'edit'
  producto?: Producto | null
  categorias: { id: number; nombre: string }[]
  generos: { id: number; genero: string }[]
  onSaved?: () => void
}) {
  const isEdit = mode === 'edit'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>{isEdit ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DialogClose>
        </DialogHeader>

        {!isEdit && (
          <Form {...ProductoController.store.form()} onSuccess={() => { onOpenChange(false); onSaved?.() }}>
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <ProductoForm producto={producto ?? undefined} categorias={categorias} generos={generos} errors={errors} />
                <DialogFooter className="gap-2 mt-4">
                  <DialogClose asChild><Button variant="outline">Cancelar</Button></DialogClose>
                  <Button type="submit" disabled={processing}>Guardar</Button>
                </DialogFooter>
              </>
            )}
          </Form>
        )}

        {isEdit && producto?.id && (
          <Form action={route('productos.update', producto.id)} method="put" onSuccess={() => { onOpenChange(false); onSaved?.() }}>
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <ProductoForm producto={producto} categorias={categorias} generos={generos} errors={errors} />
                <DialogFooter className="gap-2 mt-4">
                  <DialogClose asChild><Button variant="outline">Cancelar</Button></DialogClose>
                  <Button type="submit" disabled={processing}>Actualizar</Button>
                </DialogFooter>
              </>
            )}
          </Form>
        )}
      </DialogContent>
    </Dialog>
  )
}

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import ProductoController from '@/actions/App/Http/Controllers/ProductoController'
import { ProductoForm } from './producto-form'

export default function CreateProductoModal({
  open,
  onOpenChange,
  categorias,
  generos,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  categorias: { id: number; nombre: string }[]
  generos: { id: number; genero: string }[]
  onSaved?: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Nuevo Producto</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DialogClose>
        </DialogHeader>

        <Form
          {...ProductoController.store.form()}
          options={{ preserveScroll: true }}
          onSuccess={() => {
            onOpenChange(false)
            onSaved?.()
          }}
          className="space-y-4"
        >
          <ProductoForm categorias={categorias} generos={generos} errors={{}} />

          <DialogFooter className="gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>

            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

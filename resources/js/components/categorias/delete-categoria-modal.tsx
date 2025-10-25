import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import CategoriaController from '@/actions/App/Http/Controllers/CategoriaController'

type Categoria = {
  id: number
  nombre: string
  descripcion?: string
}

export default function DeleteCategoriaModal({
  open,
  onOpenChange,
  categoria,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  categoria?: Categoria | null
  onSaved?: () => void
}) {
  if (!categoria) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-m">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Eliminar Categoría</DialogTitle>
        </DialogHeader>

        <Form
          {...CategoriaController.destroy.form(categoria.id)}
          options={{ preserveScroll: true }}
          onSuccess={() => {
            onOpenChange(false)
            onSaved?.()
          }}
          className="space-y-4"
        >
          {({ processing }: { processing: boolean }) => (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  ¿Estás seguro que deseas eliminar la categoría <strong>"{categoria.nombre}"</strong>?
                </div>
              </div>

              <DialogFooter className="gap-2 mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>

                <Button variant="destructive" type="submit" disabled={processing}>
                  Eliminar
                </Button>
              </DialogFooter>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  )
}

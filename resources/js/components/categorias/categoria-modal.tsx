import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import CategoriaController from '@/actions/App/Http/Controllers/CategoriaController'
import { route } from 'ziggy-js'
import { CategoriaForm } from './categoria-form'

type Categoria = {
  id?: number
  nombre: string
  descripcion?: string
}

export default function CategoriaModal({
  open,
  onOpenChange,
  mode = 'create',
  categoria,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode?: 'create' | 'edit'
  categoria?: Categoria | null
  onSaved?: () => void
}) {
  const isEdit = mode === 'edit'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>{isEdit ? 'Editar Categoría' : 'Nueva Categoría'}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DialogClose>
        </DialogHeader>

        {/* Create form */}
        {!isEdit && (
          <Form
            {...CategoriaController.store.form()}
            onSuccess={() => {
              onOpenChange(false)
              onSaved?.()
            }}
          >
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <CategoriaForm categoria={categoria ?? undefined} errors={errors} />

                <DialogFooter className="gap-2 mt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit" disabled={processing}>
                    Guardar
                  </Button>
                </DialogFooter>
              </>
            )}
          </Form>
        )}

        {/* Edit form */}
        {isEdit && categoria?.id && (
          <Form
            action={route('categorias.update', categoria.id)}
            method="put"
            onSuccess={() => {
              onOpenChange(false)
              onSaved?.()
            }}
          >
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <CategoriaForm categoria={categoria ?? undefined} errors={errors} />

                <DialogFooter className="gap-2 mt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit" disabled={processing}>
                    Actualizar
                  </Button>
                </DialogFooter>
              </>
            )}
          </Form>
        )}
      </DialogContent>
    </Dialog>
  )
}

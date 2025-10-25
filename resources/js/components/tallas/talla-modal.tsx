import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import TallaController from '@/actions/App/Http/Controllers/TallaController'
import { route } from 'ziggy-js'
import { TallaForm } from './talla-form'

type Talla = {
  id?: number
  key: string
  nombre: string
  orden?: number
}

export default function TallaModal({
  open,
  onOpenChange,
  mode = 'create',
  talla,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode?: 'create' | 'edit'
  talla?: Talla | null
  onSaved?: () => void
}) {
  const isEdit = mode === 'edit'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>{isEdit ? 'Editar Talla' : 'Nueva Talla'}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DialogClose>
        </DialogHeader>

        {!isEdit && (
          <Form {...TallaController.store.form()} onSuccess={() => { onOpenChange(false); onSaved?.() }}>
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <TallaForm talla={talla ?? undefined} errors={errors} />
                <DialogFooter className="gap-2 mt-4">
                  <DialogClose asChild><Button variant="outline">Cancelar</Button></DialogClose>
                  <Button type="submit" disabled={processing}>Guardar</Button>
                </DialogFooter>
              </>
            )}
          </Form>
        )}

        {isEdit && talla?.id && (
          <Form action={route('tallas.update', talla.id)} method="put" onSuccess={() => { onOpenChange(false); onSaved?.() }}>
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <TallaForm talla={talla ?? undefined} errors={errors} />
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

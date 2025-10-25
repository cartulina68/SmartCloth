import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import TallaController from '@/actions/App/Http/Controllers/TallaController'
// import InputError from '@/components/input-error'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import { TallaForm } from './talla-form'

export default function CreateTallaModal({
  open,
  onOpenChange,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSaved?: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Nueva Talla</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DialogClose>
        </DialogHeader>

        <Form
          {...TallaController.store.form()}
          options={{ preserveScroll: true }}
          onSuccess={() => {
            onOpenChange(false)
            onSaved?.()
          }}
          className="space-y-4"
        >
          <TallaForm errors={{}} />

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

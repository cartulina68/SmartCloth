import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import { route } from 'ziggy-js'
import { ColorForm } from './color-form'

type Color = {
  id?: number
  nombre: string
  codigo_hex: string
}

export default function EditColorModal({
  open,
  onOpenChange,
  color,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  color?: Color | null
  onSaved?: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Editar Color</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DialogClose>
        </DialogHeader>

        {color?.id && (
          <Form
            action={route('colors.update', color.id)}
            method="put"
            onSuccess={() => {
              onOpenChange(false)
              onSaved?.()
            }}
            className="space-y-4"
          >
            {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
              <>
                <ColorForm colorData={color ?? undefined} errors={errors} />

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

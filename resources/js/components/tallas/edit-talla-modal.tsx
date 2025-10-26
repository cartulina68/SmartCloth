import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import TallaController from '@/actions/App/Http/Controllers/TallaController'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import InputError from '@/components/input-error'

type Talla = {
  id: number
  key: string
  nombre: string
  orden?: number
}

export default function EditTallaModal({
  open,
  onOpenChange,
  talla,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  talla?: Talla | null
  onSaved?: () => void
}) {
  if (!talla) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Editar Talla</DialogTitle>
        </DialogHeader>

          {talla?.id && (
            <Form
              {...TallaController.update.form(talla.id)}
              options={{ preserveScroll: true }}
              onSuccess={() => {
                onOpenChange(false)
                onSaved?.()
              }}
              className="space-y-4"
            >
              {({ processing, errors }: { processing: boolean; errors?: Record<string, string | string[] | undefined> }) => (
                <>
                  <div className="space-y-4">
                    {/* Campo: Código */}
                    <div className="space-y-2">
                      <Label htmlFor="key">Código</Label>
                      <Input
                        id="key"
                        name="key"
                        defaultValue={talla?.key}
                        required
                        maxLength={10}
                      />
                      <InputError message={errors?.key as string | undefined} />
                    </div>

                    {/* Campo: Nombre*/}
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        defaultValue={talla?.nombre}
                        required
                        maxLength={50}
                      />
                      <InputError message={errors?.nombre as string | undefined} />
                    </div>

                    {/* Campo: Orden */}
                    <div className="space-y-2">
                      <Label htmlFor="orden">Orden</Label>
                      <Input
                        id="orden"
                        name="orden"
                        type="number"
                        defaultValue={talla?.orden}
                      />
                      <InputError message={errors?.orden as string | undefined} />
                    </div>
                  </div>

                  <DialogFooter className="gap-2 mt-4">
                    <DialogClose asChild>
                      <Button variant="outline" disabled={processing}>Cancelar</Button>
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

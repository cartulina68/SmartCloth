import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Form } from '@inertiajs/react'
import ColorController from '@/actions/App/Http/Controllers/ColorController'
import InputError from '@/components/input-error'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { HexColorPicker } from "react-colorful";
import { useState } from 'react'

export default function CreateColorModal({
  open,
  onOpenChange,
  onSaved,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSaved?: () => void
}) {
  const [colorValue, setColorValue] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Nuevo Color</DialogTitle>
        </DialogHeader>

        <Form
          {...ColorController.store.form()}
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
                {/* Campo nombre */}
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre del color</Label>
                  <Input id="nombre" name="nombre" required maxLength={50} />
                  <InputError message={errors?.nombre as string | undefined} />
                </div>

                {/* Campo código HEX */}
                <div className="space-y-2">
                  <Label htmlFor="codigo_hex">Código HEX</Label>
                  <input id="codigo_hex" name="codigo_hex" value={colorValue} type="hide" readOnly />
                  <HexColorPicker className="mt-3" color={colorValue} onChange={setColorValue} />
                  <InputError message={errors?.codigo_hex as string | undefined} />
                </div>
              </div>

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
      </DialogContent>
    </Dialog>
  )
}

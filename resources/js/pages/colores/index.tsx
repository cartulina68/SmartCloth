import { useState } from 'react'
import { Head } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { route } from 'ziggy-js'
import AppLayout from '@/layouts/app-layout'
import CreateColorModal from '@/components/colores/create-color-modal'
// import EditColorModal from '@/components/colores/edit-color-modal'

type Color = {
  id: number
  nombre: string
  codigo_hex: string
}

interface Props {
  colores: Color[]
}

export default function ColoresIndex({ colores }: Props) {
  const [createOpen, setCreateOpen] = useState(false)
  // const [editOpen, setEditOpen] = useState(false)
  // const [editing, setEditing] = useState<Color | null>(null)

  function openCreate() {
    // setEditing(null)
    setCreateOpen(true)
  }

  // async function openEdit(id: number) {
  //   try {
  //     const url = route('colores.show', id)
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setEditing(data)
  //     setEditOpen(true)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  return (
    <AppLayout>
      <Head title="Colores" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Colores</h1>
          <Button onClick={openCreate}>Nuevo Color</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Listado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Código Hex</th>
                    <th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {colores.map((col) => (
                    <tr key={col.id} className="border-t">
                      <td className="p-2">{col.nombre}</td>
                      <td className="p-2">
                        <span
                          className="inline-block w-5 h-5 mr-2 rounded"
                          style={{ backgroundColor: col.codigo_hex }}
                        ></span>
                        {col.codigo_hex}
                      </td>
                      <td className="p-2 space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          // onClick={() => openEdit(col.id)}
                        >
                          Editar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <CreateColorModal
        open={createOpen}
        onOpenChange={(open) => setCreateOpen(open)}
      />

      {/* <EditColorModal
        open={editOpen}
        onOpenChange={(open) => setEditOpen(open)}
        color={editing ?? undefined}
      /> */}
    </AppLayout>
  )
}

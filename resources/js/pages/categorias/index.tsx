import { useState } from 'react'
import { Head } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CreateCategoriaModal from '@/components/categorias/create-categoria-modal'
import EditCategoriaModal from '@/components/categorias/edit-categoria-modal'
import AppLayout from '@/layouts/app-layout'
import DeleteCategoriaModal from '@/components/categorias/delete-categoria-modal'

type Categoria = {
  id: number
  nombre: string
  descripcion?: string
}

interface Props {
  categorias: Categoria[]
}

export default function CategoriaIndex({ categorias }: Props) {
  const [editOpen, setEditOpen] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editing, setEditing] = useState<Categoria | null>(null)
  const [deleting, setDeleting] = useState<Categoria | null>(null)

  function openCreate() {
    setEditing(null)
    setCreateOpen(true)
  }

  async function openEdit(id: number) {
    const categoria = categorias.find(cat => cat.id === id)

    if (!categoria) {
      console.error('Categoría no encontrada')
      return
    }

    setEditing(categoria)
    setEditOpen(true)
  }

  async function openDelete(id: number) {
    const categoria = categorias.find(cat => cat.id === id)

    if (!categoria) {
      console.error('Categoría no encontrada')
      return
    }

    setDeleting(categoria)
    setDeleteOpen(true)
  }

  return (
    <AppLayout>
        <Head title="Categorías" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Categorías</h1>
          <Button onClick={openCreate}>Nueva Categoría</Button>
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
                      <th className="p-2">Descripción</th>
                      <th className="p-2">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorias.map(cat => (
                      <tr key={cat.id} className="border-t">
                        <td className="p-2">{cat.nombre}</td>
                        <td className="p-2">{cat.descripcion}</td>
                        <td className="p-2 space-x-2">
                          <Button size="sm" variant="outline" onClick={() => openEdit(cat.id)}>Editar</Button>
                          <Button size="sm" variant="destructive" onClick={() => openDelete(cat.id)}>Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </CardContent>
        </Card>
      </div>

      <CreateCategoriaModal
        open={createOpen}
        onOpenChange={(open) => setCreateOpen(open)}
        // onSaved={fetchCategorias}
      />

      <EditCategoriaModal
        open={editOpen}
        onOpenChange={(open) => setEditOpen(open)}
        categoria={editing ?? undefined}
        // onSaved={fetchCategorias}
      />

      <DeleteCategoriaModal
        open={deleteOpen}
        onOpenChange={(open) => setDeleteOpen(open)}
        categoria={deleting ?? undefined}
        // onSaved={fetchCategorias}
      />
    </AppLayout>
  )
}

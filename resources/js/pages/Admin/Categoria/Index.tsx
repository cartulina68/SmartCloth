import React, { useEffect, useState } from 'react'
import { Head } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { route } from 'ziggy-js'
import { CategoriaForm } from '@/components/categorias/categoria-form'
import AppLayout from '@/layouts/app-layout'

type Categoria = {
  id: number
  nombre: string
  descripcion?: string
}

export default function CategoriaIndex() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState<Categoria | null>(null)

  async function fetchCategorias() {
    setLoading(true)
    try {
      const res = await fetch('/admin/api/categorias')
      const data = await res.json()
      setCategorias(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategorias()
  }, [])

  function openCreate() {
    setEditing(null)
    setModalOpen(true)
  }

  async function openEdit(id: number) {
    try {
  const url = route('categorias.show', id)
      const res = await fetch(url)
      const data = await res.json()
      setEditing(data)
      setModalOpen(true)
    } catch (e) {
      console.error(e)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('¿Eliminar esta categoría?')) return
    try {
      const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
  const url = route('categorias.destroy', id)
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf,
        },
      })
      if (res.ok) {
        await fetchCategorias()
      } else {
        console.error('Delete failed', res.status)
      }
    } catch (e) {
      console.error(e)
    }
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
            {loading ? (
              <div>Cargando...</div>
            ) : (
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
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(cat.id)}>Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-full max-w-2xl p-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">{editing ? 'Editar Categoría' : 'Nueva Categoría'}</h2>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>Cerrar</Button>
              </div>
              <CategoriaForm
                categoria={editing ?? undefined}
                isEditing={Boolean(editing)}
                onSuccess={async () => {
                  setModalOpen(false)
                  await fetchCategorias()
                }}
              />
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  )
}

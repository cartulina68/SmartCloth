import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            {/* Encabezado */}
            <div className="mb-2 flex items-center justify-between">
                <h1 className="text-2xl font-semibold tracking-wide text-gray-100">
                    Bienvenido al Panel de Control
                </h1>
                <span className="text-sm text-gray-500">
                    Smart
                    <span className="font-semibold text-red-500">Cloth</span>
                </span>
            </div>

            {/* Tarjetas resumen */}
            <div className="grid auto-rows-min gap-6 md:grid-cols-3">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-md transition-all duration-200 hover:shadow-red-900/10">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-700/20" />
                    <div className="absolute bottom-4 left-4 font-medium text-gray-300">
                        Ventas del mes
                    </div>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-md transition-all duration-200 hover:shadow-red-900/10">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-700/20" />
                    <div className="absolute bottom-4 left-4 font-medium text-gray-300">
                        Nuevos usuarios
                    </div>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-md transition-all duration-200 hover:shadow-red-900/10">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-700/20" />
                    <div className="absolute bottom-4 left-4 font-medium text-gray-300">
                        Productos activos
                    </div>
                </div>
            </div>

            {/* Sección inferior */}
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-gray-800 bg-[#1a1a1a] shadow-inner">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-800/20" />
                <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                    Aquí podrás ver estadísticas o reportes
                </div>
            </div>
        </AppLayout>
    );
}

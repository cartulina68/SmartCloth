import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/productos-variantes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductoVarianteController::index
 * @see app/Http/Controllers/ProductoVarianteController.php:15
 * @route '/admin/productos-variantes'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/productos-variantes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductoVarianteController::create
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\ProductoVarianteController::store
 * @see app/Http/Controllers/ProductoVarianteController.php:32
 * @route '/admin/productos-variantes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/productos-variantes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::store
 * @see app/Http/Controllers/ProductoVarianteController.php:32
 * @route '/admin/productos-variantes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::store
 * @see app/Http/Controllers/ProductoVarianteController.php:32
 * @route '/admin/productos-variantes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::store
 * @see app/Http/Controllers/ProductoVarianteController.php:32
 * @route '/admin/productos-variantes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::store
 * @see app/Http/Controllers/ProductoVarianteController.php:32
 * @route '/admin/productos-variantes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
export const show = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/productos-variantes/{productos_variante}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
show.url = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productos_variante: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    productos_variante: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productos_variante: args.productos_variante,
                }

    return show.definition.url
            .replace('{productos_variante}', parsedArgs.productos_variante.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
show.get = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
show.head = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
    const showForm = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
        showForm.get = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductoVarianteController::show
 * @see app/Http/Controllers/ProductoVarianteController.php:48
 * @route '/admin/productos-variantes/{productos_variante}'
 */
        showForm.head = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
export const edit = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/productos-variantes/{productos_variante}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
edit.url = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productos_variante: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    productos_variante: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productos_variante: args.productos_variante,
                }

    return edit.definition.url
            .replace('{productos_variante}', parsedArgs.productos_variante.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
edit.get = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
edit.head = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
    const editForm = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
        editForm.get = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductoVarianteController::edit
 * @see app/Http/Controllers/ProductoVarianteController.php:0
 * @route '/admin/productos-variantes/{productos_variante}/edit'
 */
        editForm.head = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
export const update = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/productos-variantes/{productos_variante}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
update.url = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productos_variante: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    productos_variante: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productos_variante: args.productos_variante,
                }

    return update.definition.url
            .replace('{productos_variante}', parsedArgs.productos_variante.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
update.put = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
update.patch = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
    const updateForm = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
        updateForm.put = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ProductoVarianteController::update
 * @see app/Http/Controllers/ProductoVarianteController.php:55
 * @route '/admin/productos-variantes/{productos_variante}'
 */
        updateForm.patch = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ProductoVarianteController::destroy
 * @see app/Http/Controllers/ProductoVarianteController.php:70
 * @route '/admin/productos-variantes/{productos_variante}'
 */
export const destroy = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/productos-variantes/{productos_variante}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProductoVarianteController::destroy
 * @see app/Http/Controllers/ProductoVarianteController.php:70
 * @route '/admin/productos-variantes/{productos_variante}'
 */
destroy.url = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productos_variante: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    productos_variante: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productos_variante: args.productos_variante,
                }

    return destroy.definition.url
            .replace('{productos_variante}', parsedArgs.productos_variante.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductoVarianteController::destroy
 * @see app/Http/Controllers/ProductoVarianteController.php:70
 * @route '/admin/productos-variantes/{productos_variante}'
 */
destroy.delete = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProductoVarianteController::destroy
 * @see app/Http/Controllers/ProductoVarianteController.php:70
 * @route '/admin/productos-variantes/{productos_variante}'
 */
    const destroyForm = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductoVarianteController::destroy
 * @see app/Http/Controllers/ProductoVarianteController.php:70
 * @route '/admin/productos-variantes/{productos_variante}'
 */
        destroyForm.delete = (args: { productos_variante: string | number } | [productos_variante: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const productosVariantes = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default productosVariantes
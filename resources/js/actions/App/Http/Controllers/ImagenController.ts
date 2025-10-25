import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/imagenes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ImagenController::index
 * @see app/Http/Controllers/ImagenController.php:10
 * @route '/admin/imagenes'
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
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/imagenes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ImagenController::create
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/create'
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
* @see \App\Http\Controllers\ImagenController::store
 * @see app/Http/Controllers/ImagenController.php:15
 * @route '/admin/imagenes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/imagenes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ImagenController::store
 * @see app/Http/Controllers/ImagenController.php:15
 * @route '/admin/imagenes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::store
 * @see app/Http/Controllers/ImagenController.php:15
 * @route '/admin/imagenes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ImagenController::store
 * @see app/Http/Controllers/ImagenController.php:15
 * @route '/admin/imagenes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ImagenController::store
 * @see app/Http/Controllers/ImagenController.php:15
 * @route '/admin/imagenes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
export const show = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/imagenes/{imagene}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
show.url = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagene: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    imagene: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        imagene: args.imagene,
                }

    return show.definition.url
            .replace('{imagene}', parsedArgs.imagene.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
show.get = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
show.head = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
    const showForm = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
        showForm.get = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ImagenController::show
 * @see app/Http/Controllers/ImagenController.php:25
 * @route '/admin/imagenes/{imagene}'
 */
        showForm.head = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
export const edit = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/imagenes/{imagene}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
edit.url = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagene: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    imagene: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        imagene: args.imagene,
                }

    return edit.definition.url
            .replace('{imagene}', parsedArgs.imagene.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
edit.get = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
edit.head = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
    const editForm = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
        editForm.get = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ImagenController::edit
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}/edit'
 */
        editForm.head = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
export const update = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/imagenes/{imagene}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
update.url = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagene: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    imagene: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        imagene: args.imagene,
                }

    return update.definition.url
            .replace('{imagene}', parsedArgs.imagene.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
update.put = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
update.patch = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
    const updateForm = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
        updateForm.put = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ImagenController::update
 * @see app/Http/Controllers/ImagenController.php:0
 * @route '/admin/imagenes/{imagene}'
 */
        updateForm.patch = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ImagenController::destroy
 * @see app/Http/Controllers/ImagenController.php:30
 * @route '/admin/imagenes/{imagene}'
 */
export const destroy = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/imagenes/{imagene}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ImagenController::destroy
 * @see app/Http/Controllers/ImagenController.php:30
 * @route '/admin/imagenes/{imagene}'
 */
destroy.url = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagene: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    imagene: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        imagene: args.imagene,
                }

    return destroy.definition.url
            .replace('{imagene}', parsedArgs.imagene.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagenController::destroy
 * @see app/Http/Controllers/ImagenController.php:30
 * @route '/admin/imagenes/{imagene}'
 */
destroy.delete = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ImagenController::destroy
 * @see app/Http/Controllers/ImagenController.php:30
 * @route '/admin/imagenes/{imagene}'
 */
    const destroyForm = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ImagenController::destroy
 * @see app/Http/Controllers/ImagenController.php:30
 * @route '/admin/imagenes/{imagene}'
 */
        destroyForm.delete = (args: { imagene: string | number } | [imagene: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ImagenController = { index, create, store, show, edit, update, destroy }

export default ImagenController
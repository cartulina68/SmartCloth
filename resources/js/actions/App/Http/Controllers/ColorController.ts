import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/colores',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:10
 * @route '/admin/colores'
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
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/colores/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ColorController::create
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/create'
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
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:15
 * @route '/admin/colores'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/colores',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:15
 * @route '/admin/colores'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:15
 * @route '/admin/colores'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:15
 * @route '/admin/colores'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:15
 * @route '/admin/colores'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
export const show = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/colores/{colore}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
show.url = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { colore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    colore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        colore: args.colore,
                }

    return show.definition.url
            .replace('{colore}', parsedArgs.colore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
show.get = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
show.head = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
    const showForm = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
        showForm.get = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:26
 * @route '/admin/colores/{colore}'
 */
        showForm.head = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
export const edit = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/colores/{colore}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
edit.url = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { colore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    colore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        colore: args.colore,
                }

    return edit.definition.url
            .replace('{colore}', parsedArgs.colore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
edit.get = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
edit.head = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
    const editForm = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
        editForm.get = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ColorController::edit
 * @see app/Http/Controllers/ColorController.php:0
 * @route '/admin/colores/{colore}/edit'
 */
        editForm.head = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
export const update = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/colores/{colore}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
update.url = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { colore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    colore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        colore: args.colore,
                }

    return update.definition.url
            .replace('{colore}', parsedArgs.colore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
update.put = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
update.patch = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
    const updateForm = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
        updateForm.put = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:31
 * @route '/admin/colores/{colore}'
 */
        updateForm.patch = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:42
 * @route '/admin/colores/{colore}'
 */
export const destroy = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/colores/{colore}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:42
 * @route '/admin/colores/{colore}'
 */
destroy.url = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { colore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    colore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        colore: args.colore,
                }

    return destroy.definition.url
            .replace('{colore}', parsedArgs.colore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:42
 * @route '/admin/colores/{colore}'
 */
destroy.delete = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:42
 * @route '/admin/colores/{colore}'
 */
    const destroyForm = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:42
 * @route '/admin/colores/{colore}'
 */
        destroyForm.delete = (args: { colore: string | number } | [colore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ColorController = { index, create, store, show, edit, update, destroy }

export default ColorController
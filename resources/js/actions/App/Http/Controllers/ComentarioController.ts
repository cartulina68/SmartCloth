import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/comentarios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComentarioController::index
 * @see app/Http/Controllers/ComentarioController.php:10
 * @route '/admin/comentarios'
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
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/comentarios/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComentarioController::create
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/create'
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
* @see \App\Http\Controllers\ComentarioController::store
 * @see app/Http/Controllers/ComentarioController.php:15
 * @route '/admin/comentarios'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/comentarios',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComentarioController::store
 * @see app/Http/Controllers/ComentarioController.php:15
 * @route '/admin/comentarios'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::store
 * @see app/Http/Controllers/ComentarioController.php:15
 * @route '/admin/comentarios'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComentarioController::store
 * @see app/Http/Controllers/ComentarioController.php:15
 * @route '/admin/comentarios'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::store
 * @see app/Http/Controllers/ComentarioController.php:15
 * @route '/admin/comentarios'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
export const show = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/comentarios/{comentario}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
show.url = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comentario: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { comentario: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    comentario: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        comentario: typeof args.comentario === 'object'
                ? args.comentario.id
                : args.comentario,
                }

    return show.definition.url
            .replace('{comentario}', parsedArgs.comentario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
show.get = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
show.head = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
    const showForm = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
        showForm.get = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComentarioController::show
 * @see app/Http/Controllers/ComentarioController.php:27
 * @route '/admin/comentarios/{comentario}'
 */
        showForm.head = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
export const edit = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/comentarios/{comentario}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
edit.url = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comentario: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    comentario: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        comentario: args.comentario,
                }

    return edit.definition.url
            .replace('{comentario}', parsedArgs.comentario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
edit.get = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
edit.head = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
    const editForm = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
        editForm.get = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComentarioController::edit
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}/edit'
 */
        editForm.head = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
export const update = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/comentarios/{comentario}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
update.url = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comentario: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    comentario: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        comentario: args.comentario,
                }

    return update.definition.url
            .replace('{comentario}', parsedArgs.comentario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
update.put = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
update.patch = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
    const updateForm = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
        updateForm.put = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ComentarioController::update
 * @see app/Http/Controllers/ComentarioController.php:0
 * @route '/admin/comentarios/{comentario}'
 */
        updateForm.patch = (args: { comentario: string | number } | [comentario: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ComentarioController::destroy
 * @see app/Http/Controllers/ComentarioController.php:32
 * @route '/admin/comentarios/{comentario}'
 */
export const destroy = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/comentarios/{comentario}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ComentarioController::destroy
 * @see app/Http/Controllers/ComentarioController.php:32
 * @route '/admin/comentarios/{comentario}'
 */
destroy.url = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comentario: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { comentario: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    comentario: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        comentario: typeof args.comentario === 'object'
                ? args.comentario.id
                : args.comentario,
                }

    return destroy.definition.url
            .replace('{comentario}', parsedArgs.comentario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComentarioController::destroy
 * @see app/Http/Controllers/ComentarioController.php:32
 * @route '/admin/comentarios/{comentario}'
 */
destroy.delete = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ComentarioController::destroy
 * @see app/Http/Controllers/ComentarioController.php:32
 * @route '/admin/comentarios/{comentario}'
 */
    const destroyForm = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComentarioController::destroy
 * @see app/Http/Controllers/ComentarioController.php:32
 * @route '/admin/comentarios/{comentario}'
 */
        destroyForm.delete = (args: { comentario: number | { id: number } } | [comentario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ComentarioController = { index, create, store, show, edit, update, destroy }

export default ComentarioController
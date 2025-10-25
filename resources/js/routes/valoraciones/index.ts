import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/valoraciones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ValoracionController::index
 * @see app/Http/Controllers/ValoracionController.php:10
 * @route '/admin/valoraciones'
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
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/valoraciones/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ValoracionController::create
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/create'
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
* @see \App\Http\Controllers\ValoracionController::store
 * @see app/Http/Controllers/ValoracionController.php:15
 * @route '/admin/valoraciones'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/valoraciones',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ValoracionController::store
 * @see app/Http/Controllers/ValoracionController.php:15
 * @route '/admin/valoraciones'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::store
 * @see app/Http/Controllers/ValoracionController.php:15
 * @route '/admin/valoraciones'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ValoracionController::store
 * @see app/Http/Controllers/ValoracionController.php:15
 * @route '/admin/valoraciones'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::store
 * @see app/Http/Controllers/ValoracionController.php:15
 * @route '/admin/valoraciones'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
export const show = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/valoraciones/{valoracione}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
show.url = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { valoracione: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    valoracione: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        valoracione: args.valoracione,
                }

    return show.definition.url
            .replace('{valoracione}', parsedArgs.valoracione.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
show.get = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
show.head = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
    const showForm = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
        showForm.get = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ValoracionController::show
 * @see app/Http/Controllers/ValoracionController.php:27
 * @route '/admin/valoraciones/{valoracione}'
 */
        showForm.head = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
export const edit = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/valoraciones/{valoracione}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
edit.url = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { valoracione: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    valoracione: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        valoracione: args.valoracione,
                }

    return edit.definition.url
            .replace('{valoracione}', parsedArgs.valoracione.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
edit.get = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
edit.head = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
    const editForm = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
        editForm.get = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ValoracionController::edit
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}/edit'
 */
        editForm.head = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
export const update = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/valoraciones/{valoracione}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
update.url = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { valoracione: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    valoracione: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        valoracione: args.valoracione,
                }

    return update.definition.url
            .replace('{valoracione}', parsedArgs.valoracione.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
update.put = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
update.patch = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
    const updateForm = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
        updateForm.put = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ValoracionController::update
 * @see app/Http/Controllers/ValoracionController.php:0
 * @route '/admin/valoraciones/{valoracione}'
 */
        updateForm.patch = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ValoracionController::destroy
 * @see app/Http/Controllers/ValoracionController.php:32
 * @route '/admin/valoraciones/{valoracione}'
 */
export const destroy = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/valoraciones/{valoracione}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ValoracionController::destroy
 * @see app/Http/Controllers/ValoracionController.php:32
 * @route '/admin/valoraciones/{valoracione}'
 */
destroy.url = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { valoracione: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    valoracione: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        valoracione: args.valoracione,
                }

    return destroy.definition.url
            .replace('{valoracione}', parsedArgs.valoracione.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ValoracionController::destroy
 * @see app/Http/Controllers/ValoracionController.php:32
 * @route '/admin/valoraciones/{valoracione}'
 */
destroy.delete = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ValoracionController::destroy
 * @see app/Http/Controllers/ValoracionController.php:32
 * @route '/admin/valoraciones/{valoracione}'
 */
    const destroyForm = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ValoracionController::destroy
 * @see app/Http/Controllers/ValoracionController.php:32
 * @route '/admin/valoraciones/{valoracione}'
 */
        destroyForm.delete = (args: { valoracione: string | number } | [valoracione: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const valoraciones = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default valoraciones
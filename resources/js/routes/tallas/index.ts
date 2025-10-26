import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/tallas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TallaController::index
 * @see app/Http/Controllers/TallaController.php:11
 * @route '/admin/tallas'
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
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/tallas/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TallaController::create
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/create'
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
* @see \App\Http\Controllers\TallaController::store
 * @see app/Http/Controllers/TallaController.php:17
 * @route '/admin/tallas'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/tallas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TallaController::store
 * @see app/Http/Controllers/TallaController.php:17
 * @route '/admin/tallas'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::store
 * @see app/Http/Controllers/TallaController.php:17
 * @route '/admin/tallas'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TallaController::store
 * @see app/Http/Controllers/TallaController.php:17
 * @route '/admin/tallas'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TallaController::store
 * @see app/Http/Controllers/TallaController.php:17
 * @route '/admin/tallas'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
export const show = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/tallas/{talla}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
show.url = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { talla: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    talla: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        talla: args.talla,
                }

    return show.definition.url
            .replace('{talla}', parsedArgs.talla.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
show.get = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
show.head = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
    const showForm = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
        showForm.get = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TallaController::show
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}'
 */
        showForm.head = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
export const edit = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/tallas/{talla}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
edit.url = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { talla: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    talla: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        talla: args.talla,
                }

    return edit.definition.url
            .replace('{talla}', parsedArgs.talla.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
edit.get = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
edit.head = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
    const editForm = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
        editForm.get = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TallaController::edit
 * @see app/Http/Controllers/TallaController.php:0
 * @route '/admin/tallas/{talla}/edit'
 */
        editForm.head = (args: { talla: string | number } | [talla: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
export const update = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/tallas/{talla}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
update.url = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { talla: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { talla: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    talla: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        talla: typeof args.talla === 'object'
                ? args.talla.id
                : args.talla,
                }

    return update.definition.url
            .replace('{talla}', parsedArgs.talla.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
update.put = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
update.patch = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
    const updateForm = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
        updateForm.put = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\TallaController::update
 * @see app/Http/Controllers/TallaController.php:30
 * @route '/admin/tallas/{talla}'
 */
        updateForm.patch = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TallaController::destroy
 * @see app/Http/Controllers/TallaController.php:42
 * @route '/admin/tallas/{talla}'
 */
export const destroy = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/tallas/{talla}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TallaController::destroy
 * @see app/Http/Controllers/TallaController.php:42
 * @route '/admin/tallas/{talla}'
 */
destroy.url = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { talla: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { talla: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    talla: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        talla: typeof args.talla === 'object'
                ? args.talla.id
                : args.talla,
                }

    return destroy.definition.url
            .replace('{talla}', parsedArgs.talla.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TallaController::destroy
 * @see app/Http/Controllers/TallaController.php:42
 * @route '/admin/tallas/{talla}'
 */
destroy.delete = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TallaController::destroy
 * @see app/Http/Controllers/TallaController.php:42
 * @route '/admin/tallas/{talla}'
 */
    const destroyForm = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TallaController::destroy
 * @see app/Http/Controllers/TallaController.php:42
 * @route '/admin/tallas/{talla}'
 */
        destroyForm.delete = (args: { talla: number | { id: number } } | [talla: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const tallas = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default tallas
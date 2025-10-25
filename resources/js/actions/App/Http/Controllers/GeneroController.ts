import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/generos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GeneroController::index
 * @see app/Http/Controllers/GeneroController.php:11
 * @route '/admin/generos'
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
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/generos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GeneroController::create
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/create'
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
* @see \App\Http\Controllers\GeneroController::store
 * @see app/Http/Controllers/GeneroController.php:17
 * @route '/admin/generos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/generos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GeneroController::store
 * @see app/Http/Controllers/GeneroController.php:17
 * @route '/admin/generos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::store
 * @see app/Http/Controllers/GeneroController.php:17
 * @route '/admin/generos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GeneroController::store
 * @see app/Http/Controllers/GeneroController.php:17
 * @route '/admin/generos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GeneroController::store
 * @see app/Http/Controllers/GeneroController.php:17
 * @route '/admin/generos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
export const show = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/generos/{genero}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
show.url = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { genero: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    genero: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        genero: args.genero,
                }

    return show.definition.url
            .replace('{genero}', parsedArgs.genero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
show.get = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
show.head = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
    const showForm = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
        showForm.get = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GeneroController::show
 * @see app/Http/Controllers/GeneroController.php:28
 * @route '/admin/generos/{genero}'
 */
        showForm.head = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
export const edit = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/generos/{genero}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
edit.url = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { genero: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    genero: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        genero: args.genero,
                }

    return edit.definition.url
            .replace('{genero}', parsedArgs.genero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
edit.get = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
edit.head = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
    const editForm = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
        editForm.get = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GeneroController::edit
 * @see app/Http/Controllers/GeneroController.php:0
 * @route '/admin/generos/{genero}/edit'
 */
        editForm.head = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
export const update = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/generos/{genero}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
update.url = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { genero: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    genero: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        genero: args.genero,
                }

    return update.definition.url
            .replace('{genero}', parsedArgs.genero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
update.put = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
update.patch = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
    const updateForm = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
        updateForm.put = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\GeneroController::update
 * @see app/Http/Controllers/GeneroController.php:33
 * @route '/admin/generos/{genero}'
 */
        updateForm.patch = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\GeneroController::destroy
 * @see app/Http/Controllers/GeneroController.php:43
 * @route '/admin/generos/{genero}'
 */
export const destroy = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/generos/{genero}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GeneroController::destroy
 * @see app/Http/Controllers/GeneroController.php:43
 * @route '/admin/generos/{genero}'
 */
destroy.url = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { genero: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    genero: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        genero: args.genero,
                }

    return destroy.definition.url
            .replace('{genero}', parsedArgs.genero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GeneroController::destroy
 * @see app/Http/Controllers/GeneroController.php:43
 * @route '/admin/generos/{genero}'
 */
destroy.delete = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\GeneroController::destroy
 * @see app/Http/Controllers/GeneroController.php:43
 * @route '/admin/generos/{genero}'
 */
    const destroyForm = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GeneroController::destroy
 * @see app/Http/Controllers/GeneroController.php:43
 * @route '/admin/generos/{genero}'
 */
        destroyForm.delete = (args: { genero: string | number } | [genero: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const GeneroController = { index, create, store, show, edit, update, destroy }

export default GeneroController
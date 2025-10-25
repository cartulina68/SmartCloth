import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:11
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
 * @see app/Http/Controllers/ColorController.php:11
 * @route '/admin/colores'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:11
 * @route '/admin/colores'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:11
 * @route '/admin/colores'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:11
 * @route '/admin/colores'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:11
 * @route '/admin/colores'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ColorController::index
 * @see app/Http/Controllers/ColorController.php:11
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
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:17
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
 * @see app/Http/Controllers/ColorController.php:17
 * @route '/admin/colores'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:17
 * @route '/admin/colores'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:17
 * @route '/admin/colores'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ColorController::store
 * @see app/Http/Controllers/ColorController.php:17
 * @route '/admin/colores'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
export const show = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/colores/{color}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
show.url = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { color: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { color: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    color: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        color: typeof args.color === 'object'
                ? args.color.id
                : args.color,
                }

    return show.definition.url
            .replace('{color}', parsedArgs.color.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
show.get = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
show.head = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
    const showForm = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
        showForm.get = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ColorController::show
 * @see app/Http/Controllers/ColorController.php:29
 * @route '/admin/colores/{color}'
 */
        showForm.head = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:34
 * @route '/admin/colores/{color}'
 */
export const update = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/colores/{color}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:34
 * @route '/admin/colores/{color}'
 */
update.url = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { color: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { color: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    color: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        color: typeof args.color === 'object'
                ? args.color.id
                : args.color,
                }

    return update.definition.url
            .replace('{color}', parsedArgs.color.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:34
 * @route '/admin/colores/{color}'
 */
update.put = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ColorController::update
 * @see app/Http/Controllers/ColorController.php:34
 * @route '/admin/colores/{color}'
 */
    const updateForm = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/ColorController.php:34
 * @route '/admin/colores/{color}'
 */
        updateForm.put = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:46
 * @route '/admin/colores/{color}'
 */
export const destroy = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/colores/{color}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:46
 * @route '/admin/colores/{color}'
 */
destroy.url = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { color: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { color: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    color: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        color: typeof args.color === 'object'
                ? args.color.id
                : args.color,
                }

    return destroy.definition.url
            .replace('{color}', parsedArgs.color.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:46
 * @route '/admin/colores/{color}'
 */
destroy.delete = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ColorController::destroy
 * @see app/Http/Controllers/ColorController.php:46
 * @route '/admin/colores/{color}'
 */
    const destroyForm = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/ColorController.php:46
 * @route '/admin/colores/{color}'
 */
        destroyForm.delete = (args: { color: number | { id: number } } | [color: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const colores = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default colores
/**
 * @private
 * @callback pc.AnimSetter
 * @description Callback function that the {@link pc.AnimEvaluator} uses to set final animation values.
 * These callbacks are stored in {@link pc.AnimTarget} instances which are constructed by an
 * {@link pc.AnimBinder}.
 * @param {number[]} value - updated animation value.
 */

/**
 * @private
 * @class
 * @name pc.AnimTarget
 * @classdesc Stores the information required by {@link pc.AnimEvaluator} for updating a target value.
 * @param {pc.AnimSetter} func - this function will be called when a new animation value is output by
 * the {@link pc.AnimEvaluator}.
 * @param {'vector'|'quaternion'} type - the type of animation data this target expects.
 * @param {number} components - the number of components on this target (this should ideally match the number
 * of components found on all attached animation curves).
 */
class AnimTarget {
    constructor(func, type, components, targetPath) {
        this._func = func;
        this._type = type;
        this._components = components;
        this._targetPath = targetPath;
    }

    get func() {
        return this._func;
    }

    get type() {
        return this._type;
    }

    get components() {
        return this._components;
    }

    get targetPath() {
        return this._targetPath;
    }
}

export { AnimTarget };

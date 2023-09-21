export const DEFAULT_CONFIG = {
    wrappers: [],
    parser: {
        "syntax": "typescript",
        "tsx": true,
    }
};

export const DEFAULT_WRAPPER_CONFIG = {
    fields: {},
    import: { module: null, default: false },
}

export const DEFAULT_FIELD_CONFIG = {
    type: "any",
    required: true,
}
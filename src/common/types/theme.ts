interface ITheme {
    id: number;
    name: string;
    style: THEME_STYLE
}

enum THEME_STYLE {
    DEFAULT = "DEFAULT",
    RED = "RED",
    GREEN = "GREEN"
}

export {
    ITheme,
    THEME_STYLE
}
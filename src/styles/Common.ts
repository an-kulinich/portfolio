import {Theme} from "./Theme";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmax?: number,
    Fmin?: number,
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin} : FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.font};
    line-height: ${lineHeight || 120}%;
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
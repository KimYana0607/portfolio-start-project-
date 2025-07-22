import iconsSprite  from '../../assets/images/Icons-sprite.svg'

type iconPropsType = {
    iconId: string
    width?: string
    heigth?: string
    viewBox?: string
}
export const Icon = (props: iconPropsType) => {
    return (
        <svg width= {props.width || "114"} height= {props.heigth || "101"}  viewBox= {props.viewBox || "0 0 114 101"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

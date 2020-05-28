export interface nullProps {
    empty: null;
}

export interface IDeleteProps {
    togglePopup: any,
    handleDelete: any,
    id: string,
}

interface IIdProps {
    id: string,
}

interface IParamsProps {
    params: IIdProps,
}

export interface IMatchProps {
    match: IParamsProps
}

export interface IEditCompositionStateType {
    name: string,
    imageURL: string,
    description: string,
    [key: string]: string
}

export interface ICompositionStateType {
    name: string,
    imageURL: string,
    description: string,
}




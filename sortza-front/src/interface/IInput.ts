export interface IElementType{
    type ?: string,
    name ?: string,
    className : string,
    placeholder ?: string,
    text ?:  string,
}

export interface ILinkType extends IElementType{
  to : string
}
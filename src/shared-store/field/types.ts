export type TFieldType = 'input' | 'textarea'

export type TFieldStoreProps = {
    fieldType?: TFieldType,
    name?: string;
    value?: string;
    errorMessage?: string;
    validationRule?: {
        rule: Function,
        errorMessage: string
    }[]
}

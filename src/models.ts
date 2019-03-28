export type ResourceType = 'menu' | 'button'
export type Category = 'platform' | 'distributor'

export interface Resource {
    id?: string,
    name: string,
    path?: string,
    parent_id: string,
    sort_number?: number,
    type: ResourceType,
    create_date_time?: Date,
    data: any,
    category: Category
}

export interface Role {
    id?: string,
    name: string,
    data: {
        resource_types: ResourceType[]
    }
}

export interface User {
    id: string,
    user_name?: string,
    mobile?: string,
    email?: string,
    password?: string,
    openid?: string,
    create_date_time: Date,
    data: { [key: string]: any }
}

export interface Message {
    id: string,
    title?: string,
    content: string,
    create_date_time: number;
    update_date_time: number;
    from_user_id: string,
    to_user_id: string,
    is_reply?: boolean,
    unread_count?: number
}

export interface DataSourceSelectResult<T> {
    totalRowCount: number;
    dataItems: Array<T>;
}

export interface DataSourceSelectArguments {
    startRowIndex?: number;
    maximumRows?: number;
    sortExpression?: string;
    filter?: string;
}


export declare type ResourceType = 'menu' | 'button';
export declare type CategoryCode = 'platform' | 'distributor';
export interface Resource {
    id: string;
    name: string;
    path?: string;
    parent_id: string;
    sort_number?: number;
    type: ResourceType;
    create_date_time?: Date;
    data: any;
    icon?: string;
}
export interface Role {
    id: string;
    name: string;
    data: {
        resource_types: ResourceType[];
    };
    category?: string;
}
export interface User {
    id: string;
    user_name?: string;
    mobile?: string;
    email?: string;
    password?: string;
    openid?: string;
    create_date_time: Date;
    data: {
        [key: string]: any;
    };
}
export interface Token {
    id: string;
    content: string;
    contentType: string;
    createDateTime: Date;
}
export interface ChatMessage {
    id: string;
    create_date_time: number;
    from_user_id: string;
    to_user_id: string;
    content: string;
    distributor_id: string;
    customer_id: string;
}
export interface LastestChatMessage {
    id: string;
    create_date_time: number;
    from_user_id: string;
    to_user_id: string;
    content: string;
    update_date_time: number;
    unread_count?: number;
    distributor_id: string;
    customer_id: string;
}
export interface UserPlatformMessage {
    id: string;
    create_date_time: number;
    title: string;
    content: string;
    user_id: string;
    is_read: boolean;
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

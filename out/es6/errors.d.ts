export declare let errors: {
    serviceUrlCanntNull(serviceName: string): Error;
    unexpectedNullResult(): Error;
    argumentNull(name: string): Error;
    fieldNull<T>(field: keyof T, itemName: string): Error;
};

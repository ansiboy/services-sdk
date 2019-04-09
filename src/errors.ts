export let errors = {
    serviceUrlCanntNull(serviceName: string) {
        let msg = `Service '${serviceName}' base url can not null.`
        return new Error(msg)
    },
    unexpectedNullResult() {
        let msg = `Null result is unexpected.`
        return new Error(msg)
    },
    unexpectedNullValue(name: string) {
        let msg = `variable ${name} is unexpected null value.`
        return new Error(msg)
    },
    argumentNull(name: string) {
        let msg = `Arugment ${name} cannt null or empty.`
        return new Error(msg)
    },
    fieldNull<T>(field: keyof T, itemName: string) {
        let msg = `${itemName} ${field} cannt be null or empty`
        return new Error(msg)
    },
    instanceMessangerStart() {
        let msg = `Instance messanger is start.`
        return new Error(msg)
    }
}
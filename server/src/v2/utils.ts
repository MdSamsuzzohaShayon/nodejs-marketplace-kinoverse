export function buildSuccess(data: any) {
    const res: any = { success: true, errors: null ,data };
    return res;
}

export function buildError(id: string, message: string): object {
    const msg = message.constructor !== String ? message.toString() : message;
    return {
        success: false,
        data: null,
        errors: { id: id, message: msg }
    }
}

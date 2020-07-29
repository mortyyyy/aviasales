export function isEmpty(target) {
    if (!target) {
        return true;
    }
    if (Array.isArray(target)) {
        return target.length === 0;
    }
    return Object.keys(target).length === 0;
}
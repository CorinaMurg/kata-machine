export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midValue = haystack[mid];

        if (needle === midValue) {
            return true;
        } else if (needle < midValue) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}
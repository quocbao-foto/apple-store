// funciotn fix name
export function limitWords(str, num) {
    let words = str.split(" ");
    if (str.length > num) {
        var result = "";
        for (var x of words) {
            if (result.length + x.length >= num + 3) {
                result = result.slice(0, -1);
                result += "...";
                return result;
            } else {
                result += `${x} `;
            }
        }
    } else {
        return str;
    }
}

//fix tien 
export function formatMoney(amount) {
    return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
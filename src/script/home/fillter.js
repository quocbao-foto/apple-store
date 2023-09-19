export function fillterById(id, products) {
    return products.fillter(id,(value) => {
        return value.id === id;
    } ) 
}


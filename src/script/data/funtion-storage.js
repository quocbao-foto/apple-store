// function lay mang tu storage
export function getArrayFromLocalStorage(key) {
    const storedArray = localStorage.getItem(key);
    return storedArray ? JSON.parse(storedArray) : [];
  }

  // Hàm để lưu mảng vào LocalStorage
export function setArrayToLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
  }

  // hàm lấy về object
  export  function getObjectFromLocalStorage(key) {
    // Lấy chuỗi JSON từ Local Storage bằng cách sử dụng tên khóa key
    const objJSON = localStorage.getItem(key);
    
    // Nếu chuỗi JSON không null, chuyển về đối tượng
    if (objJSON !== null) {
      return JSON.parse(objJSON);
    }
    
    return null; // Trả về null nếu không tìm thấy đối tượng
  }

  // hàm đưa object lên storage
  export function setObjectToLocalStorage(key, obj) {
    // Chuyển đối tượng thành chuỗi JSON
    const objJSON = JSON.stringify(obj);
    
    // Lưu chuỗi JSON vào Local Storage với tên khóa là key
    localStorage.setItem(key, objJSON);
  }
  export function removeObjectFromLocalStorage(key) {
    localStorage.removeItem(key);
}
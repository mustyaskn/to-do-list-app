// date.js
const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

export const getDate = () => {
    const date = new Date();
    return `${date.getDate().toString().padStart(2,"0")}-${months[date.getMonth()]}-${date.getFullYear().toString().slice(2)} ${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}`;
};

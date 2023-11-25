export default function formatDate(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${(date.getFullYear() % 100).toString().padStart(2, '0')}`; 
    const hours = date.getHours() % 12 || 12;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() < 12 ? 'AM' : 'PM'}`;
    return `${formattedDate} ${formattedTime}`;
}
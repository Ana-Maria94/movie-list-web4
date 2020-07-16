export const formatDate = (dateString) => {
    const Months = [
         'Ian', 
         'Feb',
         'Mar', 
         'Apr', 
         'Mai', 
         'Iun', 
         'Iul',
         'Aug',
         'Sep',
         'Oct', 
         'Noe',
         'Dec']
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${Months[month]} ${year}`
}

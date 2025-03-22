export default function formatDate(date) {
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
  }).format(date);

  return formattedDate;
}
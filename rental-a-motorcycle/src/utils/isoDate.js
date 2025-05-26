export default function isoDate(date) {
    if (date && !isNaN(Date.parse(date))) {
        const isoDate = new Date(date).toISOString();
        return isoDate
    }
}
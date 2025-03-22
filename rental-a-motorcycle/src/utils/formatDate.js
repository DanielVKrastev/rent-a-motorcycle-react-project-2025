export default function formatDate(date) {
    return date.toISOString().split("T")[0];
}
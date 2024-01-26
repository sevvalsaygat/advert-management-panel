import dayjs from "dayjs";

function formatDate(date: string, format: string) {
  return dayjs(date).format(format);
}

export default { formatDate };

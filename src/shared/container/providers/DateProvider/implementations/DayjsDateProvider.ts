import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow() {
    return dayjs().toDate();
  }

  compareInHours(end_date: Date, start_date = this.dateNow()): number {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return dayjs(end_date_utc).diff(start_date_utc, "hours");
  }

  compareInDays(end_date: Date, start_date = this.dateNow()): number {
    const start_date_utc = this.convertToUTC(start_date);
    const end_date_utc = this.convertToUTC(end_date);
    return dayjs(start_date_utc).diff(end_date_utc, "days");
  }
}
export { DayjsDateProvider };

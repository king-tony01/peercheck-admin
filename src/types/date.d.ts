interface DateFormater {
  date: string | Date;
  locale?: string;
  options?: {
    short?: boolean;
    withTime?: boolean;
    withSeconds?: boolean;
    withTimezone?: boolean;
  };
}

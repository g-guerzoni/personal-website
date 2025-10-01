import type { AbstractIntlMessages } from "next-intl";

type Messages = typeof import("../../messages/en.json");

declare global {
  interface IntlMessages extends Messages {}
}

export type { Messages, AbstractIntlMessages };

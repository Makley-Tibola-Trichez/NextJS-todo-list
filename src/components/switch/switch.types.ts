import { ErrorMessages } from "~/lib/errorMessages";
import { SetRequired } from "~/types/util.types";

export type SwitchProps = SetRequired<NextUISwitchProps, 'name'> & {
  rules?: ErrorMessages;
};
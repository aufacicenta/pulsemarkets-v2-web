import { ReactNode } from "react";

export type WalletSelectorNavbarProps = {
  children?: ReactNode;
  className?: string;
  onClickSidebarVisibility: (visible: boolean) => void;
};

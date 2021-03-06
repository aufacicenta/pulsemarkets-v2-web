import clsx from "clsx";

import { Typography } from "ui/typography/Typography";
import { useWalletStateContext } from "hooks/useWalletStateContext/useWalletStateContext";

import { BalancePillProps } from "./BalancePill.types";
import styles from "./BalancePill.module.scss";

export const BalancePill: React.FC<BalancePillProps> = ({ className }) => {
  const wallet = useWalletStateContext();

  return (
    <div className={clsx(styles["balance-pill"], className)}>
      <div className={styles["balance-pill__wrapper"]}>
        <div>
          <Typography.Description flat>My Balance:</Typography.Description>
        </div>
        <div className={styles["balance-pill__wrapper--amount"]}>
          <Typography.Description inline truncate>
            {wallet.balance.get()}
          </Typography.Description>
        </div>
      </div>
    </div>
  );
};

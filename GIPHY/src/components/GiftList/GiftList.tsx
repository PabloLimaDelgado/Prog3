import { CardGift } from "../ui/CardGift/CardGift";
import styles from "./GiftList.module.css";
import { useAppSelector } from "../../hooks/redux";

export const GiftList = () => {
  const gift = useAppSelector((state) => state.gift.gift);

  return (
    <div className={styles.containerList}>
      {gift.map((elemento, index) => (
        <CardGift gift={elemento} key={index} />
      ))}
    </div>
  );
};

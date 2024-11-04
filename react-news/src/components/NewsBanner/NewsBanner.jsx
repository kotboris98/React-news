import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./styles.module.css";

const NewsBanner = ({item}) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
        </div>
    )
}

export default NewsBanner
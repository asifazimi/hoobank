import { clients } from "../constants";
import styles from "../style";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-10`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          const { logo, id } = client;
          return (
            <div
              key={id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={logo}
                alt="logo"
                className="sm:w-[192px] w-[100px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Client;

// import style
import styles from "./../styles/routes/About.module.scss";

export default function About() {
  return (
    <section>
      <img
        className={styles.heroImage}
        src="https://picsum.photos/id/15/600/600"
        alt="about image"
      />
      <div className={styles.description}>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          provident commodi, similique numquam amet dicta soluta libero, officia
          tempore reprehenderit praesentium ex reiciendis mollitia corporis
          voluptatibus voluptate magni ipsa cum.
        </p>
      </div>
    </section>
  );
}

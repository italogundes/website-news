import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import imageWeb3 from '../../public/image-web-3-desktop.jpg';
import imageRetro from '../../public/image-retro-pcs.jpg';
import imageLapTops from '../../public/image-top-laptops.jpg';
import imageGaming from '../../public/image-gaming-growth.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>News | Homepage</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Website de novidades em tecnologia no geral"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main}`}>
        <section>
          <figure>
            <Image
              src={imageWeb3}
              width={900}
              height={300}
              alt="Imagem de topo da seção"
              layout="responsive"
              objectFit="cover"
            />
          </figure>
          <div className={styles.contentMain}>
            <h1>The Bright Future of Web 3.0?</h1>
            <article>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
              <button>READ MORE</button>
            </article>
          </div>
        </section>
        <aside className={styles.newsMain}>
          <h2>New</h2>
          <ul className={styles.newsLinks}>
            <li>
              <a>Hydrogen VS Electric Cars</a>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </li>
            <li>
              <a>The Downsides of AI Artistry</a>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </li>
            <li>
              <a>Is VC Funding Drying Up?</a>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </aside>
      </main>
      <aside className={styles.topAccess}>
        <div className={styles.topAccessItem}>
          <figure>
            <Image
              src={imageRetro}
              width={110}
              height={150}
              alt="Reviving Retro PCs"
            />
          </figure>
          <div>
            <span className={styles.topNumber}>01</span>
            <a href="#" className={styles.topLink}>
              Reviving Retro PCs
            </a>
            <p className={styles.topDescription}>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className={styles.topAccessItem}>
          <figure>
            <Image
              src={imageLapTops}
              width={110}
              height={150}
              alt="Top 10 Laptops of 2022"
            />
          </figure>
          <div>
            <span className={styles.topNumber}>02</span>
            <a href="#" className={styles.topLink}>
              Top 10 Laptops of 2022
            </a>
            <p className={styles.topDescription}>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className={styles.topAccessItem}>
          <figure>
            <Image
              src={imageGaming}
              width={110}
              height={150}
              alt="The Growth of Gaming"
            />
          </figure>
          <div>
            <span className={styles.topNumber}>03</span>
            <a href="#" className={styles.topLink}>
              The Growth of Gaming
            </a>
            <p className={styles.topDescription}>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

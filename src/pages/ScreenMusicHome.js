import { Button } from "@mui/material";
import styles from "./ScreenMusicHome.module.css";

const ScreenMusicHome = () => {
  return (
    <div className={styles.screenMusicHome}>
      <div className={styles.container}>
        <div className={styles.sidebarLink}>
          <div className={styles.icon}>
            <img className={styles.iconMixes} alt="" src="/iconmixes@2x.png" />
          </div>
          <div className={styles.userPicture}>
            <div className={styles.gi}>Gi</div>
          </div>
          <img
            className={styles.iconEllipsis}
            alt=""
            src="/iconellipsis@2x.png"
          />
        </div>
        <div className={styles.sidebarSection}>
          <div className={styles.sectionTitle}>MY COLLECTION</div>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Home
          </Button>
          <div className={styles.sidebarLink1}>
            <Button className={styles.home} color="primary" variant="text">
              Explore
            </Button>
          </div>
          <div className={styles.sidebarLink1}>
            <Button className={styles.home} color="primary" variant="text">
              Videos
            </Button>
          </div>
        </div>
        <div className={styles.sidebarSection1}>
          <div className={styles.sectionTitle1}>MY COLLECTION</div>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Mixes and Radio
          </Button>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Playlists
          </Button>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Albums
          </Button>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Tracks
          </Button>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Videos
          </Button>
          <Button sx={{ width: 216 }} color="primary" variant="text">
            Artists
          </Button>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.topnav}>
          <div className={styles.frame}>
            <div className={styles.topnavIconButton}>
              <div className={styles.icon1}>
                <img
                  className={styles.iconMixes}
                  alt=""
                  src="/iconarrowleft@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame1}>
              <div className={styles.frame2}>
                <img
                  className={styles.topnavIconButton1}
                  alt=""
                  src="/topnaviconbutton@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.topnavBarInput}>
              <div className={styles.icon1}>
                <img className={styles.iconMixes} alt="" src="/search@2x.png" />
              </div>
              <div className={styles.search}>Search</div>
            </div>
            <div className={styles.topnavIconButton2}>
              <div className={styles.icon1}>
                <img
                  className={styles.iconMixes}
                  alt=""
                  src="/iconarrowleft@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.sliderForYou}>
            <div className={styles.top}>
              <div className={styles.sectionTitle2}>Recently</div>
              <img
                className={styles.topnavIconButton3}
                alt=""
                src="/topnaviconbutton@2x.png"
              />
              <div className={styles.topnavIconButton4}>
                <div className={styles.icon1}>
                  <img
                    className={styles.iconMixes}
                    alt=""
                    src="/iconarrowleft@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.container2}>
              <button className={styles.forYouThumbnail}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou}>New For You</div>
                    <div className={styles.titleForYou}>My New Arrivals</div>
                    <div className={styles.descriptionForYou}>
                      Deine Freunde, Moderat, Sebastián Yatra and more
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </button>
              <div className={styles.forYouThumbnail1}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou1}>
                      New Track for you
                    </div>
                    <div className={styles.titleForYou1}>Coexist</div>
                    <div className={styles.descriptionForYou1}>
                      Album by The XX
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.forYouThumbnail2}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou}>New Album</div>
                    <div className={styles.titleForYou}>After Hours</div>
                    <div className={styles.descriptionForYou}>The Weeknd</div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </button>
              <div className={styles.forYouThumbnail3}>
                <Button
                  className={styles.container9}
                  sx={{ width: 255 }}
                  color="primary"
                  variant="outlined"
                />
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou1}>
                      Based on your likes
                    </div>
                    <div className={styles.titleForYou1}>If You Wait</div>
                    <div className={styles.descriptionForYou1}>
                      London Grammar
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.forYouThumbnail4}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou1}>
                      Daily updated mix
                    </div>
                    <div className={styles.titleForYou1}>
                      My Daily Discovery
                    </div>
                    <div className={styles.descriptionForYou1}>
                      Songs by new and familiar artists inspired by your
                      listening. Updates every morning.
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.forYouThumbnail5}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou1}>Dig Deeper</div>
                    <div className={styles.titleForYou1}>Reggaetoneras</div>
                    <div className={styles.descriptionForYou1}>
                      Created by TIDAL
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.forYouThumbnail6}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou1}>
                      Behind the music
                    </div>
                    <div className={styles.titleForYou1}>
                      Songwriter: James Blake
                    </div>
                    <div className={styles.descriptionForYou1}>
                      Kendrick Lamar, Jay Rock, Beyoncé and more
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.forYouThumbnail7}>
                <div className={styles.container3}>
                  <img
                    className={styles.imageForYouIcon}
                    alt=""
                    src="/imageforyou@2x.png"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.container4}>
                    <img
                      className={styles.bottomImageForYouIcon}
                      alt=""
                      src="/bottomimageforyou@2x.png"
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.topLabelForYou1}>
                      New Album for you
                    </div>
                    <div className={styles.titleForYou1}>Club Azur</div>
                    <div className={styles.descriptionForYou1}>
                      Album by Kungs
                    </div>
                  </div>
                </div>
                <div className={styles.primaryCta}>
                  <div className={styles.icon5}>
                    <img
                      className={styles.iconMixes}
                      alt=""
                      src="/iconplayfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenMusicHome;

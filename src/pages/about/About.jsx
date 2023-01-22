import "./about.css";

import heroImg from "../../assets/aboutPages/aboutHeroImg/about.svg";
import sertificat from "../../assets/aboutPages/aboutDocumentImg/doc.png";

const About = () => {
  return (
    <>
      <header className="about_hero">
        <div className="container">
          <div className="about_hero_main">
            <div className="about_hero_info">
              <h1 className="about_hero_title">Biz haqimizda</h1>
              <button className="detail">Ba'tafsil</button>
            </div>
            <div className="about_hero_img">
              <img src={heroImg} alt="" className="about_hero_logo" />
            </div>
          </div>
        </div>
      </header>
      <div className="about">
        <div className="container">
          <main className="about_info">
            <div className="main_top_info">
              <h1 className="main_top_info_title">
                Black Coders Team haqida umumiy ma`lumot
              </h1>
              <p className="main_top_info_p">
                Bu kompaniya 2021 - yilning avgust oyida tashkil etilgan
                nodavlat ta`lim muassasasi hisoblanadi. Bu kompaniyaning asasiy
                maqsadi o`zbek xalqini ishsizlik va bilimsizlikdan olib
                chiqarishga qaratilgan. Hozirda eng daromadli va iste`dotli
                kadrlarga ta`lab yuqori bo`lgan kasblarga o`z o`quvchilarini
                yo`naltiradi, bu kasblar: Front end developer, Back end
                developer, Full stack developer, Social media marketing, Web
                designer, Graphic designer, 3D animator, 3D interier designer,
                IELTS teacher, CEFR teacher, Mobile developer, Android
                developer, Softwere engineer, Online freelancer, Ios devepoler,
                Data scientist kabi o`nlab kasblarni yurori bilimga asoslangan
                holda o`rgatiladi. Bu kasblarni egallash davomida ishlash
                o`quchilar amaliyot va ishlash qobiliyatiga ega bo`lib boradi.
                Bu Black Coders kompaniyasining yana bir ustunligi hisoblanadi.
                Shuningdek har oyning oxirgi dam olish kunida kursdagi
                o`quvchilar imtihon qilinadi va eng baland ballarni to`plagan 3
                o`quvchi uchun imtiyozlar yaratib beriladi: 1-o`rin uchun
                keyingi oyda mutlaqo bepul o`qish imkoniyati, 2- o`rin uchun
                keyingi oyning to`lov summasining 50% miqdori qaytarib beriladi,
                3-o`rin uchun to`lov miqdorining 25% miqdori qaytarib beriladi.
              </p>
              <div className="main_info_document">
                <h1 className="main_info_document_title">
                  Davlat ro`yxatidan o`tganligi haqidagi guvohnoma
                </h1>
                <img
                  src={sertificat}
                  alt="sertificat"
                  className="main_info_document_img"
                />
              </div>
            </div>
          </main>
          <footer className="our_worker">
            <h1 className="our_worker_title">Hodimlar haqida ma`lumot</h1>
            <p className="our_worker_info">Direktor: Madaminov Komiljon.</p>
            <p className="our_worker_info">tel: +998(94) 154-07-70</p>
            
            <p className="our_worker_info">
              Manketing bo`limi boshlig`i: Raxmonov Shaxzodbek.
            </p>
            <p className="our_worker_info">tel: +998(91) 318-97-99</p>
            
            <p className="our_worker_info">
              Front End Developer: Sharobiddinov Bekzodjon.
            </p>
            <p className="our_worker_info">tel: +998(93) 134-24-45</p>
            
            <p className="our_worker_info">
              Back End Developer: Karabayev Timurbek.
            </p>
            <p className="our_worker_info">tel: +998(99) 040-40-47</p>
            
            <p className="our_worker_info">
              English teacher: G`ulomov Muhammad.
            </p>
            <p className="our_worker_info">tel: +998(94) 304-68-76</p>
            
            <p className="our_worker_info">
              Russian teacher: Mahammadjonov Maqsadjon.
            </p>
            <p className="our_worker_info">tel: +998(88) 688-87-88</p>
            
            <p className="our_worker_info">
              Tasischilar: Rafuqjon Nazirov, Madaminov Shokirjon.
            </p>
            
          </footer>
        </div>
      </div>
    </>
  );
};

export default About;

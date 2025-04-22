import { useEffect, useState } from "react";
import { SiXiaomi } from "react-icons/si";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { PiDotsThree } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "./BootScreen.css";

export default function BootScreen() {
  const [stage, setStage] = useState<"black" | "logo" | "wallpaper">("black");
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("logo"), 1000), // 1s para logo
      setTimeout(() => setStage("wallpaper"), 2500), // 1.5s para wallpaper
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    navigate("/projetos/whatsapp");
  };

  return (
    <div className="phoneContainer">
      <div className="whatsappScreen">
        <div className={`boot-screen ${stage}`} onClick={stage === "wallpaper" ? handleEnter : undefined}>
          {stage === "logo" && (
            <>
              {/* FIXME - Alterar nome das classes e ajustar CSS */}
              {/* <div className="status-bar"> */}
              <SiXiaomi className="logo" />
              {/* </div> */}
              {/* <img src="/android2.svg" /> */}
              {/* <div className="app-icons"> */}
              {/* <SiXiaomi className="logo" /> */}
              <img src="/android2.svg" className="android" />
              {/* <PiDotsThree /> */}
              {/* <img src="/android.svg" /> */}
              {/* <img src="/android.svg" /> */}
              {/* </div> */}
            </>
          )}
          {/* {stage === "wallpaper" && (
            <>
              <div className="status-bar">
                <div className="time">13:21</div>
                <div className="weather">Nublado 25ºC</div>
              </div> */}
          {/* <img src="/wallpaper.jpg" alt="wallpaper" className="wallpaper" /> */}
          {/* <div className="app-icons">
                <div className="icon" onClick={handleEnter}>
                  <FaWhatsappSquare /> */}
          {/* <img src="/whatsapp-icon.png" alt="WhatsApp CRM" /> */}
          {/* <span>WhatsApp CRM</span>
                </div>
              </div>
            </>
          )} */}
        </div>
        {/* <div className={styles.loginBackground}>
          <div className={styles.loginScreen}>
            <h3>Bem-vindo</h3>
            <input
              placeholder="Usuário"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
          </div>
        </div> */}
      </div>

      {/* <div className={styles.androidNavigation}>
        <div className={styles.navButton}><i className="fas fa-square"></i></div>
        <div className={styles.navButton}><img src="/circle.svg" className={styles.navIcon} /></div>
        <div className={styles.navButton}><i className="fas fa-caret-left"></i></div>
      </div> */}
    </div>
  );
}

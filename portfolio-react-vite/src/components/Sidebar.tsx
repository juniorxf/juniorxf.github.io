/* src/components/Sidebar.tsx */

import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css'
// import { FaCog } from 'react-icons/fa';
// import { FaChartBar, FaUserFriends } from 'react-icons/fa';
import { IoLogoWhatsapp as LogoWhatsappInativo, IoPersonCircle, IoPersonCircleOutline } from "react-icons/io5";
import { TbDeviceImac, TbDeviceImacFilled } from "react-icons/tb";
import { IoLogoWhatsapp as LogoWhatsappAtivo } from "react-icons/io";
// import { HiBars3, HiOutlineBars3 } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
// import { FaBars } from "react-icons/fa6";
import { PiGearSix, PiGearSixFill } from "react-icons/pi";
import { AiOutlineProject, AiFillProject } from "react-icons/ai";
// import { IoPhonePortrait, IoPhonePortraitOutline } from "react-icons/io5";
// import { SiXiaomi } from "react-icons/si";  // Xiaomi para entrada
import { RiHome4Line, RiHome4Fill } from 'react-icons/ri';
// import { IoMdNotifications } from 'react-icons/io';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topIcons}>
        <NavLink to="/expand" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {/* {({ isActive }) => isActive ? <FaBars size={22} /> : <HiOutlineBars3 size={22} />} */}
          {/* {({ isActive }) => isActive ? <HiBars3 size={22} /> : <HiOutlineBars3 size={22} />} */}
          {/* {({ isActive }) => isActive ? <HiOutlineBars3 size={22} /> : <HiOutlineBars3 size={22} />} */}
          <HiOutlineBars3 size={22} />
        </NavLink>
        <NavLink to="/" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {({ isActive }) => isActive ? <RiHome4Fill size={22} /> : <RiHome4Line size={22} />}
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {({ isActive }) => isActive ? <IoPersonCircle size={22} /> : <IoPersonCircleOutline size={22} />}
          {/* {({ isActive }) => isActive ? <FaChartBar size={22} /> : <FaChartBar size={22} />} */}
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {({ isActive }) => isActive ? <TbDeviceImacFilled size={22} /> : <TbDeviceImac size={22} />}
          {/* {({ isActive }) => isActive ? <FaUserFriends size={22} /> : <FaUserFriends size={22} />} */}
        </NavLink>
        <hr className={styles.hr1} />
        <NavLink to="/projetos" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {({ isActive }) => isActive ? <AiFillProject size={22} /> : <AiOutlineProject size={22} />}
          {/* {({ isActive }) => isActive ? <IoMdNotifications size={22} /> : <IoMdNotifications size={22} />} */}
        </NavLink>
        <NavLink to="/projetos/whatsapp" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {({ isActive }) => isActive ? <LogoWhatsappAtivo size={22} /> : <LogoWhatsappInativo size={22} />}
        </NavLink>
      </div>
      <div className={styles.bottomIcons}>
        <hr className={styles.hr2} />
        <NavLink to="/config" className={({ isActive }) => styles.iconButton + ' ' + (isActive ? styles.active : '')}>
          {({ isActive }) => isActive ? <PiGearSixFill size={22} /> : <PiGearSix size={22} />}
        </NavLink>
        <div className={styles.avatarWrapper}>
          <img
            src="https://github.com/juniorxf.png"
            alt="Avatar"
            width={38}
            height={38}
            className={styles.avatar}
          />
        </div>
      </div>
    </aside>
  );
}

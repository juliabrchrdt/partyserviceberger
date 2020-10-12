import React from "react"
import styles from "./Header.module.scss"
import {
  StartImg,
  LogoImg,
  KulinarikImg,
  AusstattungImg,
  HochzeitenImg,
  LocationsImg, UeberUnsImg
} from "../00_Lib/Images"

export const HeaderStart = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__position}>
        <StartImg />
      </div>
      <div className={styles.header__logo}>
        <LogoImg />
      </div>
    </div>
  )
}

export const HeaderKulinarik = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__position}>
        <KulinarikImg />
      </div>
      <h1 className={styles.header__title}>Kulinarik</h1>
    </div>
  )
}

export const HeaderAusstattung = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__position}>
        <AusstattungImg />
      </div>
      <h1 className={styles.header__title}>Ausstattung</h1>
    </div>
  )
}

export const HeaderHochzeiten = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__position}>
        <HochzeitenImg />
      </div>
      <h1 className={styles.header__title}>Hochzeiten</h1>
    </div>
  )
}

export const HeaderLocations = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__position}>
        <LocationsImg />
      </div>
      <h1 className={styles.header__title}>Locations</h1>
    </div>
  )
}

export const HeaderUeberUns = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__position}>
        <UeberUnsImg />
      </div>
      <h1 className={styles.header__title}>Team Berger</h1>
    </div>
  )
}
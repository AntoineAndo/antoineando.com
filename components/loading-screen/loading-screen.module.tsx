import React from 'react'
import styles from './loading-screen.module.scss'
import { Html, useProgress } from '@react-three/drei'

type Props = {}

function LoadingScreen({}: Props) {
    console.log("loader")
  const { progress } = useProgress()
//   return <Html center>{progress} % loaded</Html>
  return (<Html fullscreen><div className={styles.loadingScreen}>
                <div className={styles.loader}></div>
            </div></Html>);
}

export default LoadingScreen
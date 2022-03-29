import React, { useEffect } from 'react'
import styles from './loading-screen.module.scss'
import { Html, useProgress } from '@react-three/drei'

type Props = {}

function LoadingScreen({}: Props) {
  const { progress } = useProgress()
//   return <Html center>{progress} % loaded</Html>

  return (<div className={styles.loadingScreen}>
                <div className={styles.loader}></div>
            </div>);
}

export default LoadingScreen
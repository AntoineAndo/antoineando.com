import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import { sanityClient } from "../sanity";
import { Vector3 } from 'three';
import Scene from '../components/scene';
import PageContent from '../components/page-content/page-content.module';

const Home: NextPage = ({pages, config, projects}: any) => {
  // let [isLoaded, setIsLoaded] = useState(false);
  // let [currentPage, setCurrentPage]: any = useState({});
  // let [nextPage, setNextPage]: any = useState({});
  // let [animationIsRunning, setAnimationisRunning] = useState(false);

  let [appState, setAppState]: any = useState({
    isLoaded: false,
    isAnimationRunning: false,
    currentPage: {},
    nextPage: {},
  })

  const sceneRef = useRef()

  //onMount
  useEffect(()=>{
  
    //Get the appropriate pixel ratio for all devices
    config.devicePixelRatio = (window.devicePixelRatio>3)?3:window.devicePixelRatio;

    //Get the page to load based on the current hash
    let hash = (location.hash == "") ? undefined : location.hash.replace('#','');
    let initialPage = pages.find((page: any)=>(page.url == hash))

    patchState({
      isLoaded: true, 
      currentPage: initialPage
    })

  }, [])

  
  function handleMenuItemClick(page: any){

    //If the user is already on the clicked page
    if(appState.currentPage.name == page.name){
      return ;
    }

    //Prevents the Home button from having an empty hash #
    if(page.url == undefined){
      location.hash = "";
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }else{
      location.hash = page.url
    }

    if(sceneRef.current != undefined){
      patchState({
        nextPage: page,
        isAnimationRunning: true
      });
      (sceneRef.current as any).triggerAnimation(page);

    }
  }

  /**
   * Callback method called to display the content while the camera animation is still running
   */
  function displayContent(){
    patchState({
      isAnimationRunning: false,
      currentPage: appState.nextPage,
    })
  }
  
  /**
   * Callback method called once the camera movement is complete
   */
  function animationCallback(){
    patchState({
      isAnimationRunning: false,
      currentPage: appState.nextPage,
      nextPage: {}
    })
  }

  /**
   * Method used to patch the current app state by providing only the data to update
   * @param data 
   */
  function patchState(data: any){

    //Duplicate current state;
    let newState = {
      isLoaded: appState.isLoaded,
      isAnimationRunning: appState.isAnimationRunning,
      currentPage: appState.currentPage,
      nextPage: appState.nextPage
    };

    //Patch values
    Object.keys(data).forEach((key: string)=>{
      //@ts-ignore
      newState[key] = data[key];
    })

    //Update state
    setAppState(newState);
  }

  //Render the scene once the data are loaded
  if(appState.isLoaded && appState.currentPage != {}){

    return (
      <div id="root" className='h-screen w-screen'>
        <Scene 
          config={config} 
          ref={sceneRef}
          //Move to next page if defined, else display current page
          cameraPosition={(appState.nextPage.desktopCameraPosition != undefined ? appState.nextPage.desktopCameraPosition : appState.currentPage.desktopCameraPosition)}
          displayContentCallback={displayContent}
          animationCallback={animationCallback}/>
        <section>
          <div className="content-container">
            <PageContent currentPage={appState.currentPage} projects={projects} animationIsRunning={appState.isAnimationRunning} />
          </div>
          <nav>
            {pages.map((page : any) => {
              return (<div className='button' onClick={(event) => handleMenuItemClick(page)} key={page.url}>
                  <span>{page.name}</span>
                </div>)}
            )}
          </nav>
        </section>
      </div>
    );
  }

  //Fallback if not loaded
  return <div id="root" className='h-screen w-screen'></div>

}

export const getStaticProps = async ()=>{

  const queryPages = `
  *[_type=="page"] | order(order asc)`;

  const queryInformations = `
  *[_type=="informations"][0]`;

  const queryProjects = `
  *[_type=="project"] | order(publishedAt desc)`;

  const pages = await sanityClient.fetch(queryPages);
  const config = await sanityClient.fetch(queryInformations);
  const projects = await sanityClient.fetch(queryProjects);

  return {
    props: {
      pages,
      config,
      projects
    }
  };
}

export default Home

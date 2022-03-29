import type { NextPage } from 'next'
import { Suspense, useEffect, useRef, useState } from 'react';
import { sanityClient } from "../sanity";
import Scene from '../components/scene';
import PageContent from '../components/page-content/page-content.module';

import { AppState, Page, Project } from '../components/types/types';
import LoadingScreen from '../components/loading-screen/loading-screen.module';

const Home: NextPage = ({pages, config, projects}: any) => {

  let [appState, setAppState]: [AppState, Function] = useState({
    isLoaded: false,
    isAnimationRunning: false,
    currentPage: {} as Page,
    nextPage: {} as Page,
  })

  const sceneRef = useRef()

  //onMount
  useEffect(()=>{
    //Get the appropriate pixel ratio for all devices
    config.devicePixelRatio = (window.devicePixelRatio>3)?3:window.devicePixelRatio;

    config.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    //Get the page to load based on the current hash
    let hash = (location.hash == "") ? undefined : location.hash.replace('#','');
    let initialPage = pages.find((page: any)=>(page.url == hash))

    setTimeout(()=>{
      patchState({
        isLoaded: true, 
        currentPage: initialPage
      })
    }, 1000)

  }, [])


  useEffect(()=>{
    //Subscript to hash change
    //Allow navigation using browser's previous and next buttons
    window.addEventListener('hashchange', handleHashChange);

    //Subscription cleanup
    return () => window.removeEventListener("hashchange", handleHashChange);
  })

  function handleHashChange(){
    let hash = (location.hash == "") ? undefined : location.hash.replace('#','');
    let page = pages.find((page: any)=>(page.url == hash))

    navigate(page);
  }

  
  function handleMenuItemClick(page: Page){

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
  }

  function navigate(page: Page){
    let currentSceneRef: any = sceneRef.current;
    if(currentSceneRef != undefined){
      patchState({
        nextPage: page,
        isAnimationRunning: true
      });
      currentSceneRef.triggerAnimation(page);

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
  if(appState.isLoaded && appState.currentPage.cameraPositions != undefined){

    return (
      <div id="root" className='h-screen w-screen'>
        <Scene 
          config={config} 
          ref={sceneRef}
          //Move to next page if defined, else display current page
          cameraPositions={(appState.nextPage.cameraPositions != undefined ? appState.nextPage.cameraPositions : appState.currentPage.cameraPositions)}
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

  return <></>;

}

export const getStaticProps = async ()=>{

  const queryPages = `
  *[_type=="page"] | order(order asc)`;

  const queryInformations = `
  *[_type=="informations"][0]`;

  const queryProjects = `
  *[_type=="project"] | order(publishedAt desc)`;

  const pages: Array<Page> = await sanityClient.fetch(queryPages);
  const config = await sanityClient.fetch(queryInformations);
  const projects: Array<Project> = await sanityClient.fetch(queryProjects);

  return {
    props: {
      pages,
      config,
      projects
    }
  };
}

export default Home

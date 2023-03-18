import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners";
import Layout from "./components/layout"


function App() {
  const [ loading, setLoading ] = useState<boolean>(false);


  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])

  return (
    <div className="app">
        {loading?
        <BeatLoader className='app__spinner'
        color={"#CCCCCC"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"/>:
        <Layout/>}
    </div>
  )
}

export default App

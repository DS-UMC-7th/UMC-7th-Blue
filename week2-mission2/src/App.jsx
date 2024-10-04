import { MOVIES } from "./mocks/movies"
import './App.css'
import { useState } from "react";

function App() {

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const [opacityValue, setOpacityValue] = useState(0);

  return (
    <div
      style={{display: "flex", justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap"}}> 
        {MOVIES.results.map((result, idx) => (
          <div key={result.id}
            style={{
              width: '9.5vw',
              borderRadius: '10px', 
              marginBottom: '20px',
              position: 'relative',
            }}
          >
          <img 
            key={result.id}
            src={`${IMG_URL}${result.poster_path}`} 
            alt="포스터 이미지" 
            style={{
              width: '100%', 
              height: '100%',
              borderRadius: '10px', 
              marginBottom: '10px',
              }} />

              {/* 검은 배경 */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  opacity: opacityValue === idx ? 1 : 0
                }}
                onMouseOver={() => setOpacityValue(idx)}
                onMouseLeave={() => setOpacityValue(null)} 
              >
              </div>
          </div>
        ))}
    </div>
  )
}

export default App

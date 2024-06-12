import React from 'react'
import transition from '../FramerMotion/transition'
import './About.css'



const About = () => {

  const experiences = [
    {
      title: "Front End Developer",
      company: "BlueSky Tech",
      duration: "Marzo 2023 - Octubre 2024",
      description: "Optimizacion de rendimientto y experiencia de usuario "
    },
    {
      title: "Junior Developer",
      company: "NextGen Digital",
      duration: "Marzo 2021 - Octubre 2023",
      description: "Creacion de inferfaces y manteniento, pruebas y depuración "
    },
    
    
  ];
  
  return (
    
    <div className="about">
      
      <h2>Un poco <span style={{color:'orange'}}>sobre mí</span></h2>
      <p>
        Soy un desarrollador FrontEnd con experiencia en la creación de aplicaciones web modernas y responsivas. Me apasiona el desarrollo de interfaces de usuario atractivas y funcionales, y tengo un fuerte enfoque en la experiencia del usuario. Mis habilidades incluyen HTML, CSS, JavaScript, React, y otras tecnologías modernas de desarrollo web. Estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades para ofrecer soluciones de alta calidad.
      </p>


      <div className="technologies">
        <h3><span style={{color:'orange'}}>Tecnologías</span> y <span style={{color:'orange'}}>Frameworks</span> que utilizo</h3>
        <div className="tech-list">
          <div className="tech-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#E14E1D" rx="60" /><path fill="#fff" d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z" /><path fill="#EBEBEB" d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z" /><path fill="#EBEBEB" d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z" /></svg>

          </div>
          <div className="tech-item">
            <svg width="50" height="50" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="256" height="256" rx="60" fill="#0277BD" />
              <path d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z" fill="#EBEBEB" />
              <path d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z" fill="#EBEBEB" />
              <path d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z" fill="#EBEBEB" />
              <path d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z" fill="white" />
            </svg>

          </div>
          <div className="tech-item">
            <svg width="50" height="50" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="256" height="256" rx="60" fill="#F0DB4F" />
              <path d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93" fill="#323330" />
              <path d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354" fill="#323330" />
            </svg>

          </div>
          <div className="tech-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60" /><path fill="#00D8FF" d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z" /><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z" clip-rule="evenodd" /><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z" clip-rule="evenodd" /><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z" clip-rule="evenodd" /></svg>

          </div>
          <div className="tech-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#007ACC" rx="60" /><path fill="#fff" d="M56.6112 128.849L56.5299 139.333H73.1902H89.8505L89.8505 186.673V234.012H101.635H113.419V186.673L113.419 139.333H130.079H146.739V129.052C146.739 123.363 146.618 118.609 146.455 118.487C146.333 118.325 126.056 118.243 101.472 118.284L56.7331 118.406L56.6112 128.849Z" /><path fill="#fff" d="M206.567 118.108C213.068 119.734 218.026 122.619 222.577 127.332C224.934 129.852 228.428 134.444 228.713 135.541C228.794 135.866 217.66 143.343 210.915 147.528C210.671 147.691 209.695 146.634 208.598 145.009C205.307 140.214 201.853 138.141 196.57 137.776C188.809 137.247 183.811 141.311 183.852 148.097C183.852 150.088 184.136 151.266 184.949 152.892C186.655 156.427 189.825 158.54 199.781 162.847C218.107 170.731 225.949 175.932 230.826 183.327C236.271 191.576 237.49 204.742 233.792 214.535C229.729 225.181 219.651 232.414 205.469 234.812C201.081 235.584 190.678 235.462 185.965 234.609C175.684 232.78 165.932 227.701 159.918 221.037C157.561 218.436 152.969 211.65 153.254 211.162C153.375 211 154.432 210.35 155.61 209.659C156.748 209.009 161.056 206.53 165.119 204.173L172.474 199.906L174.018 202.182C176.172 205.473 180.885 209.984 183.73 211.487C191.897 215.795 203.113 215.185 208.639 210.228C210.996 208.074 211.971 205.839 211.971 202.548C211.971 199.581 211.605 198.281 210.061 196.046C208.07 193.202 204.007 190.804 192.466 185.806C179.26 180.117 173.571 176.582 168.37 170.974C165.363 167.724 162.518 162.522 161.34 158.174C160.365 154.558 160.121 145.496 160.893 141.839C163.615 129.08 173.246 120.181 187.143 117.539C191.654 116.686 202.137 117.011 206.567 118.108Z" /></svg>

          </div>

          <div className="tech-item">
          <svg width="50" height="50" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="256" height="256" rx="60" fill="#242938"/>
<path d="M34.25 61.125L127.325 28L222.85 60.6125L207.412 183.7L127.325 228L48.5375 184.275L34.25 61.125Z" fill="#E23237"/>
<path d="M222.85 60.6125L127.325 28V228L207.412 183.7L222.85 60.6125Z" fill="#B52E31"/>
<path d="M127.469 51.375L69.4688 180.375L91.1125 179.937L102.8 150.788H154.675L167.375 180.163L188.012 180.6L127.469 51.375ZM127.612 92.7875L147.237 133.769H110.5L127.669 92.7875H127.612Z" fill="white"/>
</svg>
          
</div>

<div className="tech-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="url(#paint0_linear_158_100)" rx="60"/><g filter="url(#filter0_d_158_100)"><path fill="url(#paint1_linear_158_100)" d="M131.97 196.157C161.646 196.157 179.529 181.626 179.529 157.66C179.529 139.543 166.77 126.428 147.823 124.351V123.597C161.743 121.332 172.666 108.405 172.666 93.9689C172.666 73.3992 156.427 60 131.68 60H76V196.157H131.97ZM97.6533 77.2674H126.46C142.12 77.2674 151.013 84.2497 151.013 96.8935C151.013 110.387 140.67 117.935 121.917 117.935H97.6533V77.2674V77.2674ZM97.6533 178.89V134.071H126.266C146.76 134.071 157.393 141.619 157.393 156.339C157.393 171.058 147.05 178.89 127.523 178.89H97.6533V178.89Z"/><path stroke="#fff" stroke-width="2" d="M131.97 196.157C161.646 196.157 179.529 181.626 179.529 157.66C179.529 139.543 166.77 126.428 147.823 124.351V123.597C161.743 121.332 172.666 108.405 172.666 93.9689C172.666 73.3992 156.427 60 131.68 60H76V196.157H131.97ZM97.6533 77.2674H126.46C142.12 77.2674 151.013 84.2497 151.013 96.8935C151.013 110.387 140.67 117.935 121.917 117.935H97.6533V77.2674V77.2674ZM97.6533 178.89V134.071H126.266C146.76 134.071 157.393 141.619 157.393 156.339C157.393 171.058 147.05 178.89 127.523 178.89H97.6533V178.89Z"/></g><defs><filter id="filter0_d_158_100" width="137.529" height="170.157" x="59" y="47" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_158_100"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_158_100" mode="normal" result="shape"/></filter><linearGradient id="paint0_linear_158_100" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop stop-color="#9013FE"/><stop offset="1" stop-color="#6B11F4"/></linearGradient><linearGradient id="paint1_linear_158_100" x1="85.793" x2="148.541" y1="68.962" y2="175.084" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F1E5FC"/></linearGradient></defs></svg>
          </div>

          <div className="tech-item">

          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#paint0_linear_2_119)" fill-rule="evenodd" d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z" clip-rule="evenodd"/><defs><linearGradient id="paint0_linear_2_119" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#32B1C1"/><stop offset="1" stop-color="#14C6B7"/></linearGradient></defs></svg>

          </div>
        </div>


        
      </div>
      



      <div className="experience">
      <h2>Experiencia Laboral</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    
  )
}

export default transition(About);
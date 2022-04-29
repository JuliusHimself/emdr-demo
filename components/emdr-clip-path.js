import {Controls, Player} from "@lottiefiles/react-lottie-player";
import clipPath from "../public/animations/emdr-clip-path.json";
import {css} from "@emotion/react"

export default function EmdrClipPath() {

  const divStyles = css`
  	padding: 15px;
  	max-width: 1080px;
  `

  return (
	  <>
		<div className={divStyles}>
		  <h5>Row of dots using opacity</h5>
		  <p>This animation is okay but there is too much blur/frame drop to be given a thumbs up</p>
		</div>
		<Player
			renderer="svg"
			autoplay
			loop
			src={clipPath}
			style={{ height: '100px' }}
			speed={1}
		>
		  {/*<Controls visible={true} buttons={['play', 'stop', 'repeat', 'debug']} />*/}
		</Player>
	  </>
  )
}
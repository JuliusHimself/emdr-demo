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
		  <h5>Clipping a line along a path</h5>
		  <p>This animation is would probably work well. The center of the line stay solid enough through the animation to hold focus, and the animation is just interesting enough to hold attention without being boring.</p>
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
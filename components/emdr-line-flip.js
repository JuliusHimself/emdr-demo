import {Controls, Player} from "@lottiefiles/react-lottie-player";
import dataTest from "../public/animations/data2.json";
import {css} from "@emotion/react"

export default function EmdrLineRotations() {

  const divStyles = css`
  	padding: 15px;
  	max-width: 1080px;
  `

  return (
	  <>
		<div className={divStyles}>
		  <h5>Line rotation with color change</h5>
		  <p>This animation didnt come out as planned, I initially wanted to make some kind of wave effect. What we ended up with here actually works well though and while it could use some more love it would be effective. Its interesting enough to hold attention without being boring.</p>
		</div>
		<Player
			renderer="svg"
			autoplay
			loop
			src={dataTest}
			style={{ height: '100px' }}
			speed={1.2}
		>
		  {/*<Controls visible={true} buttons={['play', 'stop', 'repeat', 'debug']} />*/}
		</Player>
	  </>
  )
}
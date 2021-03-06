import {Controls, Player} from "@lottiefiles/react-lottie-player";
import dotRow from "../public/animations/emdr-dot-row.json";
import {css} from "@emotion/react"

export default function EmdrDotRow() {

  const divStyles = css`
  	padding: 15px;
  	max-width: 1080px;
  `

  return (
	  <>
		<div className={divStyles}>
		  <h5>Row of dots using opacity</h5>
		  <p>For this animation the thought was to try and mimic a row of lights turning on/off similar to what you would you would see in an in person EMDR session. It didnt really turn out as expected and again is probably too blurry and boring to be effective.</p>
		</div>
		<Player
			renderer="svg"
			autoplay
			loop
			src={dotRow}
			style={{ height: '100px' }}
			speed={1.2}
		>
		  {/*<Controls visible={true} buttons={['play', 'stop', 'repeat', 'debug']} />*/}
		</Player>
	  </>
  )
}
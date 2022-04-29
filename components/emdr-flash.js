import {Controls, Player} from "@lottiefiles/react-lottie-player";
import flash from "../public/animations/emdr-dot-flash.json";
import {css} from "@emotion/react"

export default function EmdrFlash() {

  const divStyles = css`
  	padding: 15px;
  	max-width: 1080px;
  `

  return (
	  <>
		<div className={divStyles}>
		  <h5>Flash using 2 dots and opacity</h5>
		  <p>This seems to be the most common way to do emdr online. Its not bad, but is the risk that after a few minutes the subject might start staring in the middle of the 2 dots and start using their peripheral vision instead. This would defeat the point of rapid eye movement.</p>
		</div>
		<Player
			renderer="svg"
			autoplay
			loop
			src={flash}
			style={{ height: '100px' }}
			speed={1}
		>
		  {/*<Controls visible={true} buttons={['play', 'stop', 'repeat', 'debug']} />*/}
		</Player>
	  </>
  )
}
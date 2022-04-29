import {Controls, Player} from "@lottiefiles/react-lottie-player";
import translate from "../public/animations/emdr-dot-basic.json";
import {css} from "@emotion/react"

export default function EmdrTranslate() {

  const divStyles = css`
  	padding: 15px;
  	max-width: 1080px;
  `

  return (
	  <>
		<div className={divStyles}>
		  <h5>Translate-X</h5>
		  <p>This animation is okay but there is too much blur/frame drop to be effective. Its blurry and kind of boring.</p>
		</div>
		<Player
			renderer="svg"
			autoplay
			loop
			src={translate}
			style={{ height: '100px' }}
			speed={1}
		>
		  {/*<Controls visible={true} buttons={['play', 'stop', 'repeat', 'debug']} />*/}
		</Player>
	  </>
  )
}